import dotenv from 'dotenv';
dotenv.config({ quiet: true })
import express from 'express';
import { app } from "./app";

(async () => {
    try {
        app.use(express.json())

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        })

    } catch (e) {
        console.log(e);
    }
})();