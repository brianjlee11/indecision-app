class Person {
	constructor(name = 'Anonymous', age = 0;) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi I am ${this.name}.`
	}
	getDescription() {
		return `${this.name} is ${this.age} year${this.age > 1 ? 's' : ''} old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name , age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}.`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			greeting += ` I'm visiting from ${this.homeLocation}.`;
		}
		return greeting;
	}
}

const student = new Student('Brian Lee', 20);
console.log(student.getGreeting());

const traveler = new Traveler('Brian Lee', 20, 'Seattle');
const traveler2 = new Traveler(undefined, undefined, 'Seattle');

console.log(traveler.getGreeting());
console.log(traveler2.getGreeting());


