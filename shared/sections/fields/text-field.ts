import { SectionField } from "./field";
import { SectionFieldType } from "../field-definitions/type";
import { immerable } from "immer";

export class TextSectionField extends SectionField {
    [immerable] = true;

    public get type(): SectionFieldType {
        return SectionFieldType.text;
    }

    protected _value: string|null|undefined;
    public get value(): string|null|undefined {
        return this._value;
    }

    public constructor(name: string, displayPublically: boolean, value: string|null|undefined) {
        super(name, displayPublically);
        this._value = value;
    }
}