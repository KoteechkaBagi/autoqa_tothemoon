import { Student } from "../types/types";

export class Building {
    constructor (protected foundationYear: number, protected city: string) { }

    public getBuildingInfo() {
        console.log(`This building was found in ${this.foundationYear} in ${this.city}.`);
    }
}

export class Univercity extends Building {
    constructor (foundationYear: number, city: string, protected name: string) {
        super(foundationYear, city);
    }

    protected students: String[] = [];
    protected studentsAge: number[] = []

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
        args.forEach((item) => {
            let fullName: String = `${item.name} ${item.surname}`
            if(item.age >= 16) {
                this.students.push(fullName)
                this.studentsAge.push(item.age)   
            } else {
                console.log(`We believe that ${item.name} ${item.surname} should finish school at first, as he/she is only ${item.age} years old`);   
            } 
        })
        this.studentsAge = this.studentsAge.filter((el, id) => this.studentsAge.indexOf(el) === id)
    }

    public graduateStudents(... args: Student[]) {
        args.forEach((item) => {
            let fullName: String = `${item.name} ${item.surname}`
            if(this.students.includes(fullName)) {
                this.students.splice(this.students.indexOf(fullName), 1)
            } else {
                console.log(`Sorry, seems like student ${item.name} ${item.surname} is not studying in our university!`);  
            }
        })
    }
}