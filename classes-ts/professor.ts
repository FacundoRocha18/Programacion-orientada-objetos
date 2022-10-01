import Person from "../classes/person";

export default class Professor extends Person {

	private course : string;

	constructor(_name : string, _course : string) {
		super(_name);
		this.course = _course;
	}

	introduceSelf() {
    console.log(`My name is ${this.name}, and I will be your ${this.course} professor.`);
  }

	grade(test : string) {

		if(test == 'Bad') {
			return 1;
		}

    return 7;
  }
}
