const openLinksBtn = document.getElementById("open-links");
const navbarLink = document.querySelectorAll(".navbar-link");

// Open / close Navigation bar links by clicking hamburger button
openLinksBtn.addEventListener("click", () => {
	const navbarLinks = document.querySelector(".navbar-links");
	navbarLinks.classList.toggle("navbar-links-active");
});

// Close Navigation bar links by clicking Navigation bar link
navbarLink.forEach((e) => {
	e.addEventListener("click", () => {
		const navbarLinks = document.querySelector(".navbar-links");
		navbarLinks.classList.remove("navbar-links-active");
	});
});
