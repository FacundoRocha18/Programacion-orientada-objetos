class Person {
	
	readonly name: string;
	age: number

	constructor(_name: string, _age: number ) {
		this.name = _name;
		this.age = _age;
	}

	introduceSelf() {
		console.log(`Hi! I'm ${this.name} and i have ${this.age} years.`)
	}
}


export default Person;