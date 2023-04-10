import { Student } from "../types/types";

export class Building {
    constructor (protected foundationYear: number, protected city: string) {
        this.foundationYear = foundationYear
        this.city = city
    }

    public getBuildingInfo() {
        console.log(`This building was found in ${this.foundationYear} in ${this.city}.`);
    }
}

export class Univercity extends Building {
    protected name: string;

    constructor (foundationYear: number, city: string, name: string) {
        super(foundationYear, city);
        this.name = name
    }

    students: String[] = [];
    studentsAge: number[] = []

    public getStudentsList() {
        if(this.students.length) {
            this.students.forEach(item => {console.log(item);})    
        } else {
            console.log(`The studying year hasn't begun yet in ${this.name} university.`);    
        }
    }

    public getYoungestStudentAge() {
        if(this.students.length) {
            console.log(`The youngest student we have in ${this.name} university is ${Math.min(...this.studentsAge)} years old.`);
        } else {
            console.log(`We are still waiting for new students.`);    
        }
    }

    public assignStudents(... args: Student[]) {
        for (let i = 0; i < args.length; i++) {
            let fullName: String = `${args[i].name} ${args[i].surname}`
            if(!this.students.includes(fullName) && args[i].age > 16) {
                this.students.push(fullName)
                this.studentsAge.push(args[i].age)
            } else if (args[i].age < 16) {
                console.log(`We believe that ${args[i].name} ${args[i].surname} should finish school at first, as he/she is only ${args[i].age} years old`);
                
            }
        }
    }

    public graduateStudents(... args: Student[]) {
        for (let i = 0; i < args.length; i++) {
            let fullName: String = `${args[i].name} ${args[i].surname}`
            if(this.students.includes(fullName)) {
                this.students.splice(this.students.indexOf(fullName), 1)
            } else {
                console.log(`Sorry, seems like student ${args[i].name} ${args[i].surname} is not studying in our university!`);  
            }
        }
    }
}