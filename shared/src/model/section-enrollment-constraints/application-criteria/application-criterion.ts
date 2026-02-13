import { Section } from "../../sections/section";

export abstract class SectionEnrollmentConstraintApplicationCriterion {

    /**
     * determines if a section enrollment constraint is applicable to a given section
     * 
     * @param section the section which the enrollment constraint may be applicable to
     */
    public abstract isApplicable(section: Section): boolean;
}