class Person {

	name; //Public prop
	age; //Private prop

	constructor(_name, _age) {
		this.name = _name;
		this.age = _age;
	}

	introduceSelf() {
		console.log(`Hi! I'm ${this.name} and i have ${this.age} years.`)
	}
}

module.exports = Person;
