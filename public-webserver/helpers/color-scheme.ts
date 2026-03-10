import { Request, Response, NextFunction } from "express";

export async function colorSchemeMiddleware(request: Request, response: Response, next: NextFunction) {
    const schemes = await fetch(`${process.env.INTERNAL_API_BASE_URL}/config/color-scheme`, {
        headers: {
            Authorization: `Bearer ${process.env.INTERNAL_API_KEY}`,
        }
    });
    const schemesJson = await schemes.json();
    response.locals.theme = schemesJson;
    next();
}
