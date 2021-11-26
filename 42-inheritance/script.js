/**
 * Inheritance
 *
 * When a class inherits properties and methods from a parent class
 * (called a super-class).
 */

class Vehicle {
	constructor(manufacturer, model, year) {
		this.manufacturer = manufacturer
		this.model = model
		this.year = year
	}

	getInfo() {
		return `I am a ${this.manufacturer} ${this.model} Vehicle manufactured ${this.year}.`;
	}
}

class Boat extends Vehicle {
	floats = true

	getInfo() {
		return `I am a ${this.manufacturer} ${this.model} Boat that float:left; manufactured ${this.year}.`;
	}
}

class UselessBoat extends Boat {
	floats = false
}

class Yacht extends Boat {
	hasEngine = true
	impresses = true
}

class MotorVehicle extends Vehicle {
	hasEngine = true

	constructor(manufacturer, model, year, horsePower) {
		super(manufacturer, model, year)

		this.horsePower = horsePower
	}
}

class Car extends MotorVehicle {
	wheels = 4
}

class MotorCycle extends MotorVehicle {
	wheels = 2
}

const batMobile = new Car("Batman Inc.", "Batmobile", 2099, 999999);
const batCycle = new MotorCycle("Batman Inc.", "Batcycle", 2050, 5000);

const boatyMcBoatface = new Yacht("Boaty", "McBoatFace", 2010, 13370);

const garage = [batMobile, batCycle, boatyMcBoatface];
garage.forEach(vehicle => {
	console.log(vehicle.getInfo());
});
