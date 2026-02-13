import { Section } from "../../sections/section";
import { SectionEnrollmentConstraintApplicationCriterion } from "./application-criterion";

export type CourseCodeSectionEnrollmentConstraintApplicationCriterionMatchType = "exact" | "begins_with" | "ends_with" | "contains" | "regex";

export class CourseCodeSectionEnrollmentConstraintApplicationCriterion extends SectionEnrollmentConstraintApplicationCriterion {

    protected _matchType: CourseCodeSectionEnrollmentConstraintApplicationCriterionMatchType;

    protected _match: string;

    /**
     * bases the applicability of a section enrollment constraint on the course code associated with a section
     * 
     * @param match the courseCode which needs to be associated with a section for the enrollment constraint to be applicable
     */
    public constructor(
        matchType: CourseCodeSectionEnrollmentConstraintApplicationCriterionMatchType,
        match: string
    ) {
        super();
        this._matchType = matchType;
        this._match = match;
    }

    public isApplicable(section: Section): boolean {
        switch (this._matchType) {
            case "exact":
                return section.courseCode == this._match;
            case "begins_with":
                return section.courseCode.startsWith(this._match);
            case "ends_with":
                return section.courseCode.endsWith(this._match);
            case "contains":
                return section.courseCode.indexOf(this._match) != -1;
            case "regex":
                return (new RegExp(this._matchType)).test(section.courseCode);
            default:
                throw new Error(`unhandled match type ${this._matchType}`);
        }
    }
}