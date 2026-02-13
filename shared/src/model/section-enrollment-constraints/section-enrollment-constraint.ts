import { Section } from "../sections/section";
import { Student } from "../students/student";
import { SectionEnrollmentConstraintApplicationCriterion } from "./application-criteria/application-criterion";
import { SectionEnrollmentConstraintRule } from "./rules/rules";

export abstract class SectionEnrollmentConstraint {

    protected _id: string;
    public get id(): string {
        return this._id;
    }

    protected _sisId: string;
    public get sisId(): string {
        return this.sisId;
    }

    protected _name: string;
    public get name(): string {
        return this._name;
    }

    protected _termCode: string;
    public get termCode(): string {
        return this.termCode;
    }

    protected _rule: SectionEnrollmentConstraintRule;

    protected _applicationCriterion: SectionEnrollmentConstraintApplicationCriterion;

    public constructor(
        id: string,
        sisId: string,
        name: string,
        termCode: string,
        rule: SectionEnrollmentConstraintRule,
        applicationCriterion: SectionEnrollmentConstraintApplicationCriterion
    ) {
        this._id = id;
        this._sisId = sisId;
        this._name = name;
        this._termCode = termCode;
        this._rule = rule;
        this._applicationCriterion = applicationCriterion;
    }

    public studentSatisfiesConstraint(student: Student): boolean {
        return this._rule.isSatisfied(student);
    }

    public sectionRequiresApplication(section: Section): boolean {
        return this._applicationCriterion.isApplicable(section);
    }
}