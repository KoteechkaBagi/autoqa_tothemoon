import { Student } from "../types/types";
import { Univercity } from "./building";

interface Commander {
    execute(action: string, ...args: unknown[]): void;
}

export class UniversityCommander implements Commander {
    constructor(private univercity: Univercity) {}

    public execute(action : Exclude<keyof Univercity, 'students' | 'studentsAge'>, ...args: Student[]): void {
        this.univercity[action](...args)
    }
}




