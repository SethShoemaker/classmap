import express from 'express';
export const app = express();

// templating
import handlebars from "handlebars";
import { engine } from 'express-handlebars';
import path from 'path';
import fs from "fs";
const viewsDir = path.join(__dirname, 'views');
const layoutsDir = path.join(viewsDir, '__layouts');
const partialsDir = path.join(viewsDir, '__partials');
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: layoutsDir,
    helpers: {
        ifelse: (condition: boolean, If: any, Else: any) => condition ? If : Else,
        eq: (a: any, b: any) => a === b,
        includes: (array: Array<any>, value: any) => {
            if (!Array.isArray(array)) return false;
            return array.includes(value);
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', viewsDir);
fs.readdirSync(partialsDir)
    .filter(p => p.endsWith('.handlebars'))
    .map(p => ({
        name: path.basename(p, '.handlebars'),
        content: fs.readFileSync(path.join(partialsDir, p), "utf8")
    }))
    .forEach(p => handlebars.registerPartial(p.name, p.content));