document.addEventListener('DOMContentLoaded', function () {

	function clock() {
		var hours = document.querySelector('#hour');
		var minutes = document.querySelector('#minutes');
		var seconds = document.querySelector('#seconds');

		var hh = new Date().getHours();
		var mm = new Date().getMinutes();
		var ss = new Date().getSeconds();

		if (hh < 10) {
			hours.innerHTML = '0' + hh;
		} else {
			hours.innerHTML = hh;
		}

		if (mm < 10) {
			minutes.innerHTML = '0' + mm;
		} else {
			minutes.innerHTML = mm;
		}

		if (ss < 10) {
			seconds.innerHTML = '0' + ss;
		} else {
			seconds.innerHTML = ss;
		}

	}
	var interval = setInterval(clock, 1000);
});