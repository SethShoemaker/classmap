import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .withSchema(process.env.DB_SCHEMA || 'dbo')
        .createTable("section_search_column", (table) => {
            table.integer('id').primary().notNullable();
            table.string("name").notNullable().unique();
            table.integer("position").checkPositive().unique().notNullable();
            table.string("type").notNullable();
        })
        .createTable("section_search_column_section_field_usage", (table) => {
            table.integer("column_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_search_column`);
            table.integer("field_usage_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_field_usage`);
            table.primary(["column_id", "field_usage_id"]);
        })
        .createTable("section_search_basic_column", (table) => {
            table.integer("column_id").primary().notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_search_column`);
            table.integer("field_id").notNullable().references("id").inTable(`${process.env.DB_SCHEMA ? process.env.DB_SCHEMA + '.' : ''}section_field`);
        });
}


export async function down(knex: Knex): Promise<void> {
    const sectionSearchColumnFieldUsages = await knex
        .table("section_search_column_section_field_usage")
        .select("field_usage_id")
        .then(rows => rows.map(row => row.field_usage_id));

    await knex.schema
        .dropTable("section_search_basic_column")
        .dropTable("section_search_column_section_field_usage")
        .dropTable("section_search_column");

    // don't leave any orphaned field usage records
    await knex("section_field_usage")
        .whereIn("id", sectionSearchColumnFieldUsages)
        .delete();
}

