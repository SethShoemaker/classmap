import bodyParser from "body-parser";
import express from 'express';
import { app } from "./app";
import cookieParser from "cookie-parser";

const PORT = 3334;

(async () => {
    try {
        app.use(bodyParser.urlencoded())
        app.use(express.json())
        app.use(cookieParser())

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })

    } catch (e) {
        console.log(e);
    }
})();