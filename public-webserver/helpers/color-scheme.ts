import { Request, Response, NextFunction } from "express";

export async function colorSchemeMiddleware(request: Request, response: Response, next: NextFunction) {
    const schemes = await fetch(`${process.env.INTERNAL_API_BASE_URL}/config/color-scheme`, {
        headers: {
            Authorization: `Bearer ${process.env.INTERNAL_API_KEY}`,
        }
    });
    const schemesJson = await schemes.json();
    response.locals.theme = schemesJson;
    if (["light", "dark"].includes(request.cookies?.colorScheme)) {
        response.locals.themeChoice = request.cookies!.colorScheme;
    } else {
        response.cookie("colorScheme", "light", {
            expires: new Date('2045-01-01')
        });
        response.locals.themeChoice = "light";
    }
    next();
}
