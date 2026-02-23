import { immerable } from "immer";
import { SectionsModule } from "./sections";

export class State {
    [immerable] = true

    sections = new SectionsModule();

    
}