import type { Knex } from "knex";
import { tableName } from "../helpers/database-tables";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
        .createTable(tableName("config"), table => {
            table.increments("id").primary().notNullable();
            table.string("key").unique().notNullable();
            table.string("value");
        })
        .then(async () => await knex.table(tableName("config")).insert([

            { key: "color-scheme.light.color-base-100", value: "oklch(98% 0.002 247.839)" },
            { key: "color-scheme.light.color-base-200", value: "oklch(96% 0.003 264.542)" },
            { key: "color-scheme.light.color-base-300", value: "oklch(92% 0.006 264.531)" },
            { key: "color-scheme.light.color-base-content", value: "oklch(21% 0.034 264.665)" },
            { key: "color-scheme.light.color-primary", value: "oklch(55% 0.013 58.071)" },
            { key: "color-scheme.light.color-primary-content", value: "oklch(98% 0.001 106.423)" },
            { key: "color-scheme.light.color-secondary", value: "oklch(69% 0.17 162.48)" },
            { key: "color-scheme.light.color-secondary-content", value: "oklch(97% 0.021 166.113)" },
            { key: "color-scheme.light.color-accent", value: "oklch(58% 0.233 277.117)" },
            { key: "color-scheme.light.color-accent-content", value: "oklch(96% 0.018 272.314)" },
            { key: "color-scheme.light.color-neutral", value: "oklch(13% 0.028 261.692)" },
            { key: "color-scheme.light.color-neutral-content", value: "oklch(98% 0.002 247.839)" },
            { key: "color-scheme.light.color-info", value: "oklch(70% 0.165 254.624)" },
            { key: "color-scheme.light.color-info-content", value: "oklch(28% 0.091 267.935)" },
            { key: "color-scheme.light.color-success", value: "oklch(77% 0.152 181.912)" },
            { key: "color-scheme.light.color-success-content", value: "oklch(27% 0.046 192.524)" },
            { key: "color-scheme.light.color-warning", value: "oklch(85% 0.199 91.936)" },
            { key: "color-scheme.light.color-warning-content", value: "oklch(28% 0.066 53.813)" },
            { key: "color-scheme.light.color-error", value: "oklch(71% 0.202 349.761)" },
            { key: "color-scheme.light.color-error-content", value: "oklch(28% 0.109 3.907)" },
            { key: "color-scheme.light.radius-selector", value: "0.5rem" },
            { key: "color-scheme.light.radius-field", value: "0.5rem" },
            { key: "color-scheme.light.radius-box", value: "2rem" },
            { key: "color-scheme.light.size-selector", value: "0.25rem" },
            { key: "color-scheme.light.size-field", value: "0.25rem" },
            { key: "color-scheme.light.border", value: "1px" },
            { key: "color-scheme.light.depth", value: "0" },
            { key: "color-scheme.light.noise", value: "1" },

            { key: "color-scheme.dark.color-base-100", value: "oklch(25.33% 0.016 252.42)" },
            { key: "color-scheme.dark.color-base-200", value: "oklch(23.26% 0.014 253.1)" },
            { key: "color-scheme.dark.color-base-300", value: "oklch(21.15% 0.012 254.09)" },
            { key: "color-scheme.dark.color-base-content", value: "oklch(97.807% 0.029 256.847)" },
            { key: "color-scheme.dark.color-primary", value: "oklch(58% 0.233 277.117)" },
            { key: "color-scheme.dark.color-primary-content", value: "oklch(96% 0.018 272.314)" },
            { key: "color-scheme.dark.color-secondary", value: "oklch(65% 0.241 354.308)" },
            { key: "color-scheme.dark.color-secondary-content", value: "oklch(94% 0.028 342.258)" },
            { key: "color-scheme.dark.color-accent", value: "oklch(77% 0.152 181.912)" },
            { key: "color-scheme.dark.color-accent-content", value: "oklch(38% 0.063 188.416)" },
            { key: "color-scheme.dark.color-neutral", value: "oklch(14% 0.005 285.823)" },
            { key: "color-scheme.dark.color-neutral-content", value: "oklch(92% 0.004 286.32)" },
            { key: "color-scheme.dark.color-info", value: "oklch(74% 0.16 232.661)" },
            { key: "color-scheme.dark.color-info-content", value: "oklch(29% 0.066 243.157)" },
            { key: "color-scheme.dark.color-success", value: "oklch(76% 0.177 163.223)" },
            { key: "color-scheme.dark.color-success-content", value: "oklch(37% 0.077 168.94)" },
            { key: "color-scheme.dark.color-warning", value: "oklch(82% 0.189 84.429)" },
            { key: "color-scheme.dark.color-warning-content", value: "oklch(41% 0.112 45.904)" },
            { key: "color-scheme.dark.color-error", value: "oklch(71% 0.194 13.428)" },
            { key: "color-scheme.dark.color-error-content", value: "oklch(27% 0.105 12.094)" },
            { key: "color-scheme.dark.radius-selector", value: "0.5rem" },
            { key: "color-scheme.dark.radius-field", value: "0.25rem" },
            { key: "color-scheme.dark.radius-box", value: "0.5rem" },
            { key: "color-scheme.dark.size-selector", value: "0.25rem" },
            { key: "color-scheme.dark.size-field", value: "0.25rem" },
            { key: "color-scheme.dark.border", value: "1px" },
            { key: "color-scheme.dark.depth", value: "1" },
            { key: "color-scheme.dark.noise", value: "0" },

            { key: "section-search.public-search-page.heading-text", value: "Course Search" }
        ]));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable(tableName("config"));
}

