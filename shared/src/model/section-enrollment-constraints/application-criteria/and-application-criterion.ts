import { Section } from "../../sections/section";
import { SectionEnrollmentConstraintApplicationCriterion } from "./application-criterion";

export class AndSectionEnrollmentConstraintApplicationCriterion extends SectionEnrollmentConstraintApplicationCriterion {

    protected ands: SectionEnrollmentConstraintApplicationCriterion[];

    /**
     * bases the applicability of a section enrollment constraint on a list of other criteria which all must show applicability
     * 
     * @param ands the application criteria which must be meet for this criterion to show applicability
     */
    public constructor(ands: SectionEnrollmentConstraintApplicationCriterion[]) {
        super();
        this.ands = ands;
    }

    public isApplicable(section: Section): boolean {
        for (const criterion of this.ands) {
            if (!criterion.isApplicable(section)) {
                return false;
            }
        }
        return true;
    }
}