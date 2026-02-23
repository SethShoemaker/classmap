import express, { Request, Response } from "express";

export const sectionSearchRouter = express.Router();

sectionSearchRouter.post('/classes', async (request: Request, res: Response) => {
    res.render('home', {
        title: "Class Search"
    });
});
