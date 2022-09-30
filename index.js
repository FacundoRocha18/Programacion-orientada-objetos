const Professor = require('./classes-ts/professor');
const Student = require();


const matias = new Professor('Matias', 'Operating Systems');
const facundo = new Student('Facundo', 20, 6);

facundo.introduceSelf();

matias.introduceSelf();

facundo.graduates(matias.grade('work'))
