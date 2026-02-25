import express, { Request, Response } from "express";

export const sectionSearchRouter = express.Router();

sectionSearchRouter.get('/', async (request: Request, res: Response) => {

    // @ts-ignore
    const queryParams = new URLSearchParams(request.query).toString();
    const internalApiResponse = await fetch(`${process.env.INTERNAL_API_BASE_URL}/sectionSearch/sections?${queryParams}`, {
        headers: {
            Authorization: `Bearer ${process.env.INTERNAL_API_KEY}`,
        }
    });
    const internalApiResponseJson = await internalApiResponse.json();

    res.render('section-search', {...internalApiResponseJson, ...{
        title: "Class Search",
        query: request.query
    },});
});
