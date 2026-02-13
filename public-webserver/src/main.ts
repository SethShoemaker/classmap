import express from 'express';
import { app } from "./app";

const PORT = 3333;

(async () => {
    try {
        app.use(express.json())

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        })

    } catch (e) {
        console.log(e);
    }
})();