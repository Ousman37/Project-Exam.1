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

// login form  variables

function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form_message");
  messageElement.textContent = message;
  messageElement.classList.remove("form_message-success", "form_message-error");

  messageElement.classList.add("form_message--${type}");
}

function setInputError(inputElement, message) {
  inputElement.classList.add("form_input--error");
  inputElement.parentElement.querySelector(
    ".form_input-error_message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form_input--error");
  inputElement.parentElement.querySelector(
    ".form_input-error_message"
  ).textContent = "";
}

//setFormMessage(loginForm, "success", "You´re logged in!");

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountFrom = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (event) => {
      event.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountFrom.classList.remove("form--hidden");
    });

  document.querySelector("#linkLogin").addEventListener("click", (event) => {
    event.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountFrom.classList.add("form--hidden");
  });

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Perform your AJAX/Fetch login

    setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form-input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 10
      ) {
        setInputError(
          inputElement,
          "Username must be at least 10 characters in length"
        );
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});
