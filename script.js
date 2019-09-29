function changeColor() {
	event.preventDefault();
	let key = event.code;
	document.getElementById(key).style.backgroundColor = 'red';
}

function changeColor2() {
	event.preventDefault();
	let key = event.code;
	document.getElementById(key).style.backgroundColor = 'grey';
}

function writeToInput() {
	let key = event.target;
	if (key == '[object HTMLButtonElement]') {
	document.getElementById('inputField').value = `${key.innerHTML}`;
}
}



window.addEventListener('keydown', changeColor);
window.addEventListener('keyup', changeColor2);
window.addEventListener('click', writeToInput);