import { SectionTag } from "./tag";

export class Section {

    protected _sisId: string;
    public get sisId(): string {
        return this._sisId;
    }

    protected _courseCode: string;
    public get courseCode(): string {
        return this._courseCode;
    }

    protected _sectionCode: string;
    public get sectionCode(): string {
        return this._sectionCode;
    }

    protected _termCode: string;
    public get termCode(): string {
        return this.termCode;
    }

    protected _credits: number;
    public get credits(): number {
        return this._credits;
    }

    protected _tags: SectionTag[];
    public get tags(): SectionTag[] {
        return [...this.tags];
    }

    protected _academicYearText: string;
    public get academicYearText(): string {
        return this._academicYearText;
    }

    protected _academicTermText: string;
    public get academicTermText(): string {
        return this._academicTermText;
    }

    protected _titleText: string;
    public get titleText(): string {
        return this._titleText;
    }

    protected _meetingsText: string;
    public get meetingsText(): string {
        return this._meetingsText;
    }

    protected _instructorText: string;
    public get instructorText(): string {
        return this._instructorText;
    }

    protected _openSeatsText: string;
    public get openSeatsText(): string {
        return this._openSeatsText;
    }

    public constructor(
        sisId: string,
        courseCode: string,
        sectionCode: string,
        termCode: string,
        credits: number,
        tags: SectionTag[],
        academicYearText: string,
        academicTermText: string,
        titleText: string,
        meetingsText: string,
        instructorText: string,
        openSeatsText: string,
    ) {
        this._sisId = sisId;
        this._courseCode = courseCode;
        this._sectionCode = sectionCode;
        this._termCode = termCode;
        this._credits = credits;
        this._tags = tags;
        this._academicYearText = academicYearText;
        this._academicTermText = academicTermText;
        this._titleText = titleText;
        this._meetingsText = meetingsText;
        this._instructorText = instructorText;
        this._openSeatsText = openSeatsText;
    }
}