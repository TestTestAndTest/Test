(() => {
	const body = document.getElementById('body');
	const image = document.getElementById('image');
	const button = document.getElementById('button');

	var lightOn = false;
	var angry = false;
	var clicksPerSecond = 0;
	var calmDownTask = null;

	button.addEventListener('click', () => {
		body.classList.toggle('lighted');
		lightOn = !lightOn;
		clicksPerSecond++;
		updateImage();
	});

	setInterval(() => {
		if (clicksPerSecond > 5) {
			angry = true;
			image.classList.add('angry');
			updateImage();

			if (calmDownTask) {
				clearInterval(calmDownTask);
				calmDownTask = null;
			}

			calmDownTask = setTimeout(() => {
				angry = false;
				image.classList.remove('angry');
				updateImage();
			}, 1000);
		}
		clicksPerSecond = 0;
	}, 1000);

	function updateImage() {
		if (lightOn) {
			if (!angry) {
				image.setAttribute('src', 'images/wise-man-black.png');
			} else {
				image.setAttribute('src', 'images/angry-man-black.png');
			}
		} else {
			if (!angry) {
				image.setAttribute('src', 'images/wise-man-white.png');
			} else {
				image.setAttribute('src', 'images/angry-man-white.png');
			}
		}
	}
})();
