import { Section } from "../../sections/section";
import { SectionEnrollmentConstraintApplicationCriterion } from "./application-criterion";

export class TagSectionEnrollmentConstraintApplicationCriterion extends SectionEnrollmentConstraintApplicationCriterion {

    protected tagName: string;

    /**
     * bases the applicability of a section enrollment constraint on the existence of a certain tag on the section
     * 
     * @param tagName the tag which needs to exist on a section for the enrollment constraint to be applicable
     */
    public constructor(tagName: string) {
        super();
        this.tagName = tagName;
    }

    public isApplicable(section: Section): boolean {
        for (const tag of section.tags) {
            if (this.tagName == tag.name) {
                return true;
            }
        }
        return false;
    }
}