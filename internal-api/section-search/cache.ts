import { Knex } from "knex";
import { getSectionsInfo } from "../sections/sections";
import { getSectionSearchFilters } from "./filters";
import { getSectionSearchColumns } from "./columns";

export class SectionSearchCache {

    sections = new Array<Record<string, any>>();
    filters = new Array<Record<string, any>>();
    columns = new Array<Record<string, any>>();

    async update(knex: Knex | Knex.Transaction): Promise<void> {

        const [sections, filters, columns] = await Promise.all([
            getSectionsInfo(knex),
            getSectionSearchFilters(knex),
            getSectionSearchColumns(knex)
        ]);

        this.sections = sections;
        this.filters = filters;
        this.columns = columns;
    }
}

export const sectionSearchCache = new SectionSearchCache();