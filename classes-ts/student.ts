import Person from "../classes/person";

export default class Student extends Person {

	private year : number

	constructor(_name : string, _age : number, _year : number) {
		super(_name, _age);
		this.year = _year;
	}

	introduceSelf() {
    console.log(`My name is ${this.name}, i have ${this.age} years old and i'm in year ${this.year}th.`);
  }

	graduates(grade : number) {
		if ( grade < 6 ) {
			console.log(`Student ${this.name} cannot graduate due to ${grade} being less than the minimum 6.`);
			return false;
		}
		console.log(`Student ${this.name} graduates with grade: ${grade}.`);
		return true;
  }
}
