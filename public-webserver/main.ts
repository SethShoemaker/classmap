import dotenv from 'dotenv';
dotenv.config({ quiet: true })
import express from 'express';
import { app } from "./app";
import { sectionSearchRouter } from "./routers/section-search";
import path from 'path';
import { nullStringMiddleware } from "./helpers/query-params";

(async () => {
    try {
        app.use(express.json())
        app.use(nullStringMiddleware)

        app.use('/assets', express.static(path.join(__dirname, 'public')));
        app.use('/', sectionSearchRouter);

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        })

    } catch (e) {
        console.log(e);
    }
})();