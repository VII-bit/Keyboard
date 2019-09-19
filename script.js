/*let el = document.getElementById(0);
alert(el);
*/

// document.addEventListener("keydown", alert('клавиша нажата'));



function changeColor() {
	event.preventDefault();
	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = 'red';
	}
}

function changeColor2() {
	event.preventDefault();
	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = 'grey';
	}
}

function writeToInput() {
	return alert(event.code);
	let key = event.code;
	if (key == `${key}`) {
		document.getElementById("inputField").value = `${key}`;
	}
}

window.addEventListener('keydown', changeColor);
window.addEventListener('keyup', changeColor2);
window.addEventListener('onclick', writeToInput);

