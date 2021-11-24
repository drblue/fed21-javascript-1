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
}

class Boat extends Vehicle {
	floats = true
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
