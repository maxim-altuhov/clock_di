'use strict';
document.addEventListener('DOMContentLoaded', () => {

	clock();

	function clock() {
		let hours = document.querySelector('#hour'),
			minutes = document.querySelector('#minutes'),
			seconds = document.querySelector('#seconds'),
			hh = new Date().getHours(),
			mm = new Date().getMinutes(),
			ss = new Date().getSeconds();

		function getZero(num) {
			if (num >= 0 && num < 10) {
				return `0${num}`;
			} else {
				return num;
			}
		}

		hours.innerHTML = getZero(hh);
		minutes.innerHTML = getZero(mm);
		seconds.innerHTML = getZero(ss);
	}

	let interval = setInterval(clock, 1000);
});