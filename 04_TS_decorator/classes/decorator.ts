import { Actions } from "../helpers/helpers";
import { Student } from "../types/types";
import { Univercity } from "./building";

interface Commander {
    execute(action: string, ...args: unknown[]): void;
}

export class UniversityCommander implements Commander {
    
    public univercity: Univercity;

    constructor(univercity: Univercity) {
        this.univercity = univercity;
    }

    public execute(action : Actions, ...args: Student[]): void {
        switch (action) {
            case 'getStudentsList':
                this.univercity.getStudentsList()
                break;
            case 'getYoungestStudentAge':
                this.univercity.getYoungestStudentAge()
                break;
            case 'assignStudents':
                this.univercity.students = []
                this.univercity.studentsAge =[]
                this.univercity.assignStudents(...args)
                break;
            case 'graduateStudents':
                this.univercity.graduateStudents(...args)
                break;
            default:
                break;
        }
    }

}




