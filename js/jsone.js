let reg = / [A-Za-zА-Яа-яЁё]/;

let inp = document.querySelector('#name');
let span1 = document.querySelector('.span1');

document.querySelector('.btn').onclick = function (e) {
	e.perventDefault();
	if (!reg.test(inp.value)) {
		console.log('NO');
	} else {
		console.log('YES');
	}
};