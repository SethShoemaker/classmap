import { Knex } from "knex";
import { tableName } from "../helpers/database-tables";

export type SectionSearchConfig = {
    headingText: string
}

export async function getSectionSearchConfig(knex: Knex | Knex.Transaction): Promise<SectionSearchConfig> {

    const rows = await knex
        .table(tableName("config"))
        .whereIn("key", [
            "section-search.public-search-page.heading-text",
        ])
        .columns([
            "key",
            "value"
        ])
        .select<{ key: string, value: string }[]>();

    return {
        headingText: rows.find(r => r.key == "section-search.public-search-page.heading-text")!.value
    };
}