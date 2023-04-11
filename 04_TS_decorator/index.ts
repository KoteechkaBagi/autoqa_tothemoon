import { Univercity } from "./classes/building";
import { UniversityCommander } from "./classes/decorator";
import { bobMarley, donaldTrump, ilonMask, petrChaikovsky } from "./constants/constants";

const bseu = new Univercity(1956, 'Minsk', 'BSEU')

console.log('---------------Call methods from class Univercity----------------');
bseu.getStudentsList()
bseu.getYoungestStudentAge()
console.log('------------Assign students from class Univercity-----------------');
bseu.assignStudents(donaldTrump, bobMarley, petrChaikovsky)
bseu.getStudentsList()
console.log(bseu.studentsAge);
bseu.getYoungestStudentAge()

const bseuCommander = new UniversityCommander(bseu)
console.log('------------Univercity Commander - assign students-------------');
bseuCommander.execute('assignStudents', bobMarley, ilonMask)
bseuCommander.execute('graduateStudents', petrChaikovsky, bobMarley)
console.log('-------------Univercity Commander - get students list and min age----------');
bseuCommander.execute('getStudentsList')
bseuCommander.execute('getYoungestStudentAge')
