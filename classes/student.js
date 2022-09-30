const Person = require('./person.js');

class Student extends Person {

	#year; //Private prop

	constructor(_name, _age, _year) {
		super(_name, _age);
		this.#year = _year;
	}

	introduceSelf() {
    console.log(`My name is ${this.name}, i have ${this.age} years old and i'm in year ${this.#year}th.`);
  }

	graduates(grade) {
		if ( grade < 6 ) {
			console.log(`Student ${this.name} cannot graduate due to ${grade} being less than the minimum 6.`);
			return;
		}
		console.log(`Student ${this.name} graduates with grade: ${grade}.`);
		return true;
  }

}

module.exports = Student;