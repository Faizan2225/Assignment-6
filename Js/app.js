function handlePlayButtonClick() {
	let a = document.createElement("a");
	a.target = "_blank";
	a.href = "https://www.youtube.com/watch?v=3SsK-cxlj_w";
	a.click();
	a.remove();
}

// slider javascript
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const showMoreBtn = document.getElementById("slider-button");

let currentSlide = 0;

function goToSlide(slide) {
	slider.style.transform = `translateY(-${slide * 100}%)`;
	indicators[currentSlide].classList.remove("active");
	indicators[0].style.width = "10px";
	indicators[slide].classList.add("active");
	currentSlide = slide;

	// change link of the show more button with respect to slides
	switch (currentSlide) {
		case 0:
			showMoreBtn.href = "link-1";
			break;
		case 1:
			showMoreBtn.href = "link-2";
			break;
		case 2:
			showMoreBtn.href = "link-3";
			break;
		default:
			return;
	}

	console.log(showMoreBtn.href);
}

function nextSlide() {
	if (currentSlide === slides.length - 1) {
		goToSlide(0);
	} else {
		goToSlide(currentSlide + 1);
	}
}

function prevSlide() {
	if (currentSlide === 0) {
		goToSlide(slides.length - 1);
	} else {
		goToSlide(currentSlide - 1);
	}
}

indicators.forEach((indicator, index) => {
	indicator.addEventListener("click", () => {
		goToSlide(index);
	});
});

document.addEventListener("keydown", (event) => {
	if (event.key === "ArrowUp") {
		prevSlide();
	} else if (event.key === "ArrowDown") {
		nextSlide();
	}
});

// automatically loop over sides
setInterval(() => {
	nextSlide();
}, 5000);
