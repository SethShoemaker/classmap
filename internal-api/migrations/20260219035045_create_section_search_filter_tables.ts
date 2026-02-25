import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .withSchema(process.env.DB_SCHEMA || 'dbo')
        .createTable("section_search_filter", (table) => {
            table.integer('id').primary().notNullable();
            table.string("name").notNullable().unique();
            table.string("slug").notNullable().unique();
            table.integer("position").checkPositive().unique().notNullable();
            table.string("type").notNullable();
        })
        .createTable("section_search_filter_section_field_usage", (table) => {
            table.integer("filter_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_search_filter`);
            table.integer("field_usage_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_field_usage`);
            table.primary(["filter_id", "field_usage_id"]);
        })
        .createTable("section_search_text_search_filter", (table) => {
            table.integer("filter_id").primary().notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_search_filter`);
            table.integer("field_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_field`);
        })
        .createTable("section_search_multi_select_or_filter", (table) => {
            table.integer("filter_id").primary().notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_search_filter`);
            table.integer("field_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_field`);
        });
}


export async function down(knex: Knex): Promise<void> {

    const sectionSearchFilterFieldUsages = await knex
        .table("section_search_filter_section_field_usage")
        .select("field_usage_id")
        .then(rows => rows.map(row => row.field_usage_id));

    await knex.schema
        .dropTable("section_search_multi_select_or_filter")
        .dropTable("section_search_text_search_filter")
        .dropTable("section_search_filter_section_field_usage")
        .dropTable("section_search_filter");

    // don't leave any orphaned field usage records
    await knex("section_field_usage")
        .whereIn("id", sectionSearchFilterFieldUsages)
        .delete();
}

