// Global variables

const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went, make sure that ${selector} exists or typed correctly.`
  );
};

//console.log(selectElement(".navbar"));

// Vav styles on scroll
const scrollHeader = () => {
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Open menu & search  pop-up
const menuToggleIcon = selectElement("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};
menuToggleIcon.addEventListener("click", toggleMenu);

// Switch theme / add to local  storage
const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// swiper

const swiper = new Swiper(".swiper", {
  sliderPerView: 1,
  spaceBetweem: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    700: {
      sliderPerView: 2,
    },
    1200: {
      sliderPerView: 3,
    },
  },
});

// filter Search
$("#filter").keyup(function () {
  var filter = $(this).val(),
    count = 0;

  $("#posts div .article-title").each(function () {
    if ($(this).text().search(new RegExp(filter, "i")) < 0) {
      $(this).hide();
    } else {
      $(this).show();
      count++;
    }
  });
});

$(".form")
  .find("input, textarea")
  .on("keyup blur focus", function (e) {
    var $this = $(this),
      label = $this.prev("label");

    if (e.type === "keyup") {
      if ($this.val() === "") {
        label.removeClass("active highlight");
      } else {
        label.addClass("active highlight");
      }
    } else if (e.type === "blur") {
      if ($this.val() === "") {
        label.removeClass("active highlight");
      } else {
        label.removeClass("highlight");
      }
    } else if (e.type === "focus") {
      if ($this.val() === "") {
        label.removeClass("highlight");
      } else if ($this.val() !== "") {
        label.addClass("highlight");
      }
    }
  });

// Global variables

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container-column");

signUpButton.addEventListener("click", () =>
  container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
  container.classList.remove("right-panel-active")
);

console.log(signInButton);

// open/close search  form popup
//const formOpenBtn = selectElement("#search-icon");
//const formCloseBtn = selectElement("#form-close-btm");
//const searchFormContainer = selectElement("#search-form-container");
//
//formOpenBtn.addEventListener("click", () =>
//  searchFormContainer.classList.add("activated")
//);
//
//formOpenBtn.addEventListener("click", () =>
//  searchFormContainer.classList.remove("activated")
//);
//
//// -- Close the search from popup on ESC keypress
//window.addEventListener("keyup", (event) => {
//  if (event.key === "Escape") searchFormContainer.classList.remove("activated");
//});
//
//console.log(selectElement("#search-icon"));
