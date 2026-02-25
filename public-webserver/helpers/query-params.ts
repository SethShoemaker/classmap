import { NextFunction, Request, Response } from "express";

export function nullStringMiddleware(request: Request, response: Response, next: NextFunction) {
    Object.defineProperty(request, 'query', { ...Object.getOwnPropertyDescriptor(request, 'query'), value: request.query, writable: true });
    for (const [key, value] of Object.entries(request.query)) {
        if (value == 'null') {
            request.query[key] = null;
            continue;
        }
        if (Array.isArray(value)) {
            const nullPos = value.indexOf('null');
            if (nullPos != -1) {
                value[nullPos] = null;
            }
            continue;
        }
    }
    Object.defineProperty(request, 'query', { ...Object.getOwnPropertyDescriptor(request, 'query'), value: request.query, writable: false });
    next();
}

export function queryParamValueArray(queryParam: string, request: Request): Array<string> {
    const query = request.query[queryParam];

    if (!query) {
        return [];
    }

    if (Array.isArray(request.query[queryParam])) {
        // @ts-ignore
        return query;
    }

    return query.toString().split(',');
}