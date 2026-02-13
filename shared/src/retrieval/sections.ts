import { Section } from "../model/sections/section";

export interface SectionRetrieval {

    fetchAll(): Promise<Section[]>
}