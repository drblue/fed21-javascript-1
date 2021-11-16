/**
 * JavaScript Clock
 *
 */

const hourEl = document.querySelector('#hour');
const minuteEl = document.querySelector('#minute');
const secondEl = document.querySelector('#second');

const zeropad = num => {

	if (num < 10) {
		return "0" + num;
	}
	return num;

	/*
	return (num < 10)
		? "0" + num
		: num;
	*/
}

const getAndUpdateClock = () => {
	const now = new Date(); // gets current timestamp when this line was executed

	// update DOM clock
	hourEl.innerText = zeropad(now.getHours());
	minuteEl.innerText = zeropad(now.getMinutes());
	secondEl.innerText = zeropad(now.getSeconds());
}


setInterval(() => {

	// do something every second
	getAndUpdateClock();

}, 1000);


// set initial time
getAndUpdateClock();
