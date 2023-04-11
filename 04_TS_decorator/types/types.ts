export type Student = {
    name: string,
    surname: string,
    homeTown?: string,
    age: number
}

export type Actions = {
    getStudentsList: string,
    getYoungestStudentAge: string,
    assignStudents: string,
    graduateStudents: string,
}