/*let el = document.getElementById(0);
alert(el);
*/

// document.addEventListener("keydown", alert('клавиша нажата'));
Backquote.onclick = function () {
	alert('YRA!')
}


function changeColor() {

	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = 'red';
	}
}

function changeColor2() {

	let key = event.code;
	if (key == `${key}`) {
		document.getElementById(key).style.backgroundColor = 'grey';
	}
}

window.addEventListener('keydown', changeColor);
window.addEventListener('keyup', changeColor2);