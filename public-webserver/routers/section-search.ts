import express, { Request, Response } from "express";
import { queryParamValueArray } from "../helpers/query-params";

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
        filters: internalApiResponseJson.filters
            .map((filter: any) => {
                switch(filter.type) {
                    case "text_search":
                        return {
                            type: "text_search",
                            label: filter.name,
                            inputName: filter.slug,
                            placeholder: `Search ${filter.name}`,
                            autoFocus: typeof(request.query["lastInputInteractedWith"]) == "string" ? request.query["lastInputInteractedWith"].replace(/__[0-9]+$/g, '') == filter.slug : false,
                            cursorPosition: typeof(request.query["lastInputInteractedWith"]) == "string" && /__[0-9]+$/g.test(request.query["lastInputInteractedWith"]) ? parseInt(request.query["lastInputInteractedWith"].substring(request.query["lastInputInteractedWith"].lastIndexOf("_") + 1)) : 0,
                            value: request.query[filter.slug] ?? null
                        };
                    case "multi_select_or":
                        const values = queryParamValueArray(filter.slug, request)
                        return {
                            type: "multi_select_or",
                            label: filter.name,
                            inputName: filter.slug,
                            placeholder: values.length > 0 ? values.map(v => v ? v : '(none)').join(',') : `Select ${filter.name}`,
                            autoFocus: request.query["lastInputInteractedWith"] == filter.slug,
                            inputOptions: filter.inputOptions
                                .map((inputOption: any) => ({
                                    value: inputOption ? inputOption : 'null',
                                    selected: values.includes(inputOption),
                                    label: inputOption ? inputOption : '(none)'
                                }))
                        };
                    default:
                        console.log(`found unhandled filter type ${filter.type}, this needs to be resolved immediately`);
                        return null;
                }
            })
            .filter((filter: any) => filter != null),
        query: request.query
    },});
});
