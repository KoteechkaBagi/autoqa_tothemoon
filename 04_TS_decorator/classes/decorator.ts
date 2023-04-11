import { Student } from "../types/types";
import { Univercity } from "./building";

interface Commander {
    execute(action: string, ...args: unknown[]): void;
}

export class UniversityCommander implements Commander {
    
    private univercity: Univercity;

    constructor(univercity: Univercity) {
        this.univercity = univercity;
    }

    public execute(action : Exclude<keyof Univercity, 'students' | 'studentsAge'>, ...args: Student[]): void {
        switch (action) {
            case 'getStudentsList':
                this.univercity.getStudentsList()
                break;
            case 'getYoungestStudentAge':
                this.univercity.getYoungestStudentAge()
                break;
            case 'assignStudents':
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




