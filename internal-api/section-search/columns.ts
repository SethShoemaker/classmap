import { Knex } from "knex";
import { sectionSearchColumnType } from "./column-type";

export async function getSectionSearchColumns(knex: Knex | Knex.Transaction): Promise<Record<string, any>[]> {
    return knex
        .table("section_search_column")
        .leftJoin("section_search_basic_column", "section_search_column.name", "=", "section_search_basic_column.column_name")
        .orderBy("section_search_column.position")
        .select<{
            column_name: string,
            column_type: string,
            basic_column_field_name: string,
        }[]>([
            "section_search_column.name AS column_name",
            "section_search_column.type AS column_type",
            "section_search_basic_column.field_name AS basic_column_field_name",
        ])
        .then(rows => rows.map(row => {

            const genericInfo = {
                name: row.column_name,
                type: row.column_type,
            };

            let typeInfo: object;

            switch (row.column_type) {
                case sectionSearchColumnType.basic.id:
                    typeInfo = {
                        field: row.basic_column_field_name
                    };
                    break;
                default:
                    throw new Error(`unhandled section search column type: ${row.column_type}`)
            };

            return {...genericInfo, ...typeInfo};
        }));
}