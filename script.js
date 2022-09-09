const questions = document.querySelectorAll(".faq--question"),
	answersList = document.querySelectorAll(".faq--answer"),
	email = document.querySelector(".contact--email"),
	submitBtn = document.querySelector(".btn.submit"),
	emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	errorMessage = document.querySelector(".email--wrapper"),
	errorIcon = document.querySelector(".fas"),
	navLinks = document.querySelectorAll(".nav--link"),
	featureSlides = document.querySelectorAll(".features__slide"),
	hamburgerIcon = document.querySelector(".link--menu"),
	closeIcon = document.querySelector(".item--close"),
	navModal = document.querySelector(".nav--modal");

//* Toggle responsive menu:
hamburgerIcon.addEventListener("click", () => {
	navModal.style.display = "grid";
});

closeIcon.addEventListener("click", () => {
	navModal.style.display = "none";
});

//* Features tab:
navLinks.forEach(link => {
	link.addEventListener("click", () => {
		let clickedTabIndex = Array.from(navLinks).indexOf(link), //return index of clicked tab
			activeLink = document.querySelectorAll(".active--link");

		switch (clickedTabIndex) {
			case 0:
				featureSlides[0].classList.add("show--slide");
				featureSlides[1].classList.remove("show--slide");
				featureSlides[2].classList.remove("show--slide");
				break;
			case 1:
				featureSlides[0].classList.remove("show--slide");
				featureSlides[1].classList.add("show--slide");
				featureSlides[2].classList.remove("show--slide");
				break;
			case 2:
				featureSlides[0].classList.remove("show--slide");
				featureSlides[1].classList.remove("show--slide");
				featureSlides[2].classList.add("show--slide");
				break;

			default:
				break;
		}

		(activeLink.length == 1 || link.classList.contains("active--link")) &&
			activeLink[0].classList.remove("active--link");
		link.classList.add("active--link");
	});
});

//* Accordion animation
questions.forEach(q => {
	let answer = q.nextElementSibling;
	q.addEventListener("click", () => {
		let icon = q.children[0],
			openedanswer = document.querySelectorAll(".faq--answer.active");
		answer.classList.toggle("active");
		answer.classList.contains("active") &&
			(icon.classList.replace("fa-chevron-down", "fa-chevron-up") ||
				icon.classList.replace("fa-chevron-up", "fa-chevron-down"));
		// make just one only question opened
		if (openedanswer.length == 1) {
			let previousIcon = openedanswer[0].previousElementSibling.children[0];
			openedanswer[0].classList.remove("active");
			previousIcon.classList.replace("fa-chevron-up", "fa-chevron-down");
		}
	});
});

//* E-mail validation:
submitBtn.addEventListener("click", e => {
	e.preventDefault();
	if (emailPattern.test(email.value)) {
		errorIcon.style.display = "none";
		errorIcon.classList.remove("fa-circle-exclamation", "error");
		errorMessage.classList.remove("error--message");
	} else {
		email.value = null;
		errorIcon.style.display = "inline-flex";
		errorIcon.classList.add("fa-circle-exclamation", "error");
		errorMessage.classList.add("error--message");
	}
});
