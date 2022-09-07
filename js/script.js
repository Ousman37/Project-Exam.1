const menuToggleIcon = document.getElementById("menu-toggle-icon");
const navMobile = document.getElementById("nav");
const headerElement = document.getElementById("header");
const navL = document.querySelectorAll(".nav-mobile .list-link");
const skyImage = document.getElementById("sky");
const heroData = document.getElementById("hero-data");

console.log(navL);

//Toggle navigation
const toggleMenu = () => {
  navMobile.classList.toggle("active");
  headerElement.classList.toggle("active");
};

menuToggleIcon.addEventListener("click", toggleMenu);

const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 3000, // ms= 3scends
    disableOnInteraction: false,
  },

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
