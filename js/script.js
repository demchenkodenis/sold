"use strict"
alert("Джава работает");
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {
		} else {
			alert('Заполните поле');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTeast(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribut("type") === "checkbox" && input.checked === false) {
				newFunction(input);
				error++;
			} else {
				if (input.value === ' ') {
					formAddError(input);
					error++;
				}
			}
		}
	}

	return error;

	function newFunction(input) {
		formAddError(input);
	}

	function formAddError(input) {
		input.prentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.prentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-])?\w+)*@\w+([\.-])?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});
