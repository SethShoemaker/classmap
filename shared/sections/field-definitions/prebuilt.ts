import { SectionFieldDefinition } from "./definition";
import { SectionFieldType } from "./type";

export const sisIdSectionFieldDefinition = new SectionFieldDefinition(
    "SIS ID",
    SectionFieldType.text,
    false,
    true,
    true
);

export const courseCodeSectionFieldDefinition = new SectionFieldDefinition(
    "Course Code",
    SectionFieldType.text,
    true,
    false,
    true
);

export const titleSectionFieldDefinition = new SectionFieldDefinition(
    "Title",
    SectionFieldType.text,
    true,
    false,
    true
);

export const prebuiltSectionFieldDefinitions = [
    sisIdSectionFieldDefinition,
    courseCodeSectionFieldDefinition,
    titleSectionFieldDefinition
];