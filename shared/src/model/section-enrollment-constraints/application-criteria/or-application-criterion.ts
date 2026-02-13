import { Section } from "../../sections/section";
import { SectionEnrollmentConstraintApplicationCriterion } from "./application-criterion";

export class OrSectionEnrollmentConstraintApplicationCriterion extends SectionEnrollmentConstraintApplicationCriterion {

    protected ors: SectionEnrollmentConstraintApplicationCriterion[];

    /**
     * bases the applicability of a section enrollment constraint on a list of other criteria which needs at least one to show applicability
     * 
     * @param ands the application criteria which must be meet for this criterion to show applicability
     */
    public constructor(ors: SectionEnrollmentConstraintApplicationCriterion[]) {
        super();
        this.ors = ors;
    }

    public isApplicable(section: Section): boolean {
        for (const criterion of this.ors) {
            if (criterion.isApplicable(section)) {
                return true;
            }
        }
        return false;
    }
}