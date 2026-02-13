import { Student } from "../../students/student";

export abstract class SectionEnrollmentConstraintRule {

    /**
     * determines if a section enrollment constraint is satisfied by a given student
     * 
     * @param student the student which may satisfy the section enrollment constraint
     */
    public abstract isSatisfied(student: Student): boolean;

}