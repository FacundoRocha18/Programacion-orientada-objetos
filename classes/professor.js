const Person = require('./person.js');

class Professor extends Person {

	#teaches; //Private prop

	constructor(_name, _teaches) {
		super(_name);
		this.#teaches = _teaches;
	}

	introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.#teaches} professor.`);
  }

	grade(paper) {
    return 7;
  }

}

module.exports = Professor;