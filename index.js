const Person = require('./classes/person.js');
const Professor = require('./classes/professor.js');
const Student = require('./classes/student.js');


const matias = new Professor('Matias', 'Operating Systems');
const facundo = new Student('Facundo', 20, 6);

facundo.introduceSelf();

matias.introduceSelf();

facundo.graduates(matias.grade('work'))
