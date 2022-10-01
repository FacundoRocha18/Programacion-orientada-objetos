import Professor from "./classes-ts/professor";
import Student from "./classes-ts/student";

const matias = new Professor('Matias', 'Operating Systems');
const facundo = new Student('Facundo', 20, 6);

facundo.introduceSelf();

matias.introduceSelf();

facundo.graduates(matias.grade('work'))
