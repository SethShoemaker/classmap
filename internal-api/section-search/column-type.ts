import { SectionFieldType } from "../sections/type";

export const sectionSearchColumnType = {
    basic: {
        id: "basic",
        label: "Basic",
        description: "Displays a value",
        fieldTypes: [
            SectionFieldType.checkbox,
            SectionFieldType.date,
            SectionFieldType.datetime,
            SectionFieldType.number,
            SectionFieldType.text,
            SectionFieldType.time
        ]
    },
}
