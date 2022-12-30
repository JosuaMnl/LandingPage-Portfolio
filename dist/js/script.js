// Bagian Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("hamburger-active");
	navMenu.classList.toggle("hidden");
});

window.onscroll = () => {
	const header = document.querySelector("header");
	// Posisi header terhadap ujung atas halaman
	const fixedNav = header.offsetTop;
	const backToTop = document.querySelector("#back-to-top");

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navbar-fixed");
		backToTop.classList.add("flex");
		backToTop.classList.remove("hidden");
	} else {
		header.classList.remove("navbar-fixed");
		backToTop.classList.add("hidden");
		backToTop.classList.remove("flex");
	}
};

// Klik di luar hamburger
window.addEventListener("click", (e) => {
	if (e.target != navMenu && e.target != hamburger) {
		hamburger.classList.remove("hamburger-active");
		navMenu.classList.add("hidden");
	}
});

// Dark Mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
	if (darkToggle.checked) {
		html.classList.add("dark");
		// Set theme ke local storage
		localStorage.theme = "dark";
	} else {
		html.classList.remove("dark");
		// Set theme ke local storage
		localStorage.theme = "light";
	}
});

// Pindahkan posisi toggle sesuai mode di local storage
if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
	darkToggle.checked = true;
} else {
	darkToggle.checked = false;
}
