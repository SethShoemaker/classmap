import { Section } from "../../sections/section";
import { SectionEnrollmentConstraintApplicationCriterion } from "./application-criterion";

export class NotSectionEnrollmentConstraintApplicationCriterion extends SectionEnrollmentConstraintApplicationCriterion {

    protected not: SectionEnrollmentConstraintApplicationCriterion;

    /**
     * bases the applicability of a section enrollment constraint on the inverse of another application criterion
     * 
     * @param ands the application criterion which needs inverted
     */
    public constructor(not: SectionEnrollmentConstraintApplicationCriterion) {
        super();
        this.not = not;
    }

    public isApplicable(section: Section): boolean {
        return !this.not.isApplicable(section);
    }
}