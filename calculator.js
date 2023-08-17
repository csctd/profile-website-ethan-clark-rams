const display = document.getElementById('display');


function updateDisplay(value) {
	display.value += value;

}


function clearDisplay() {
	display.value = '';

}


function backspace() {
	display.value = display.value.slice(0, -1);

}


function calculate() {
	const expression = display.value;
	const result = eval(expression);
	display.value = result;

}


document.getElementById('clear').addEventListener('click', clearDisplay);

document.getElementById('backspace').addEventListener('click', backspace);

document.getElementById('equals').addEventListener('click', calculate);


document.querySelectorAll('.button').forEach(button => {
	button.addEventListener('click', () => {
		updateDisplay(button.innerText);
	});

});