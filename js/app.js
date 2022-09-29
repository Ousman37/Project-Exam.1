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

//sign-in and sign-up switch
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container_main2");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

//show and hide password
const showPassSignUp = document.getElementById("show-password-sign-up");
const hidePassSignUp = document.getElementById("hide-password-sign-up");

const passwordInputSignUp = document.getElementById("password-sign-up");

showPassSignUp.addEventListener("click", () => {
  passwordInputSignUp.type = "";
  showPassSignUp.classList.add("hide");
  hidePassSignUp.classList.remove("hide");
});

hidePassSignUp.addEventListener("click", () => {
  passwordInputSignUp.type = "password";
  hidePassSignUp.classList.add("hide");
  showPassSignUp.classList.remove("hide");
});

const showPassSignIn = document.getElementById("show-password-sign-in");
const hidePassSignIn = document.getElementById("hide-password-sign-in");

const passwordInputSignIn = document.getElementById("password-sign-in");

showPassSignIn.addEventListener("click", () => {
  passwordInputSignIn.type = "";
  showPassSignIn.classList.add("hide");
  hidePassSignIn.classList.remove("hide");
});

hidePassSignIn.addEventListener("click", () => {
  passwordInputSignIn.type = "password";
  hidePassSignIn.classList.add("hide");
  showPassSignIn.classList.remove("hide");
});

// sign-up form validation
const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password-sign-up");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === "") {
      setErrorFor(username, "Name cannot be blank");
    } else {
      setSuccessFor(username);
      if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email");
      } else {
        setSuccessFor(email);
        if (passwordValue === "") {
          setErrorFor(password, "Password cannot be blank");
        } else if (passwordValue.length < 6) {
          setErrorFor(password, "Password must be at least 6 characters long");
        } else {
          setSuccessFor(password);
          e.currentTarget.submit();
        }
      }
    }
  }

  checkInputs();
});

// sign-in form validation
const form2 = document.getElementById("form");
const email2 = document.getElementById("email2");
const password2 = document.getElementById("password-sign-in");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  function checkInputs2() {
    // trim to remove the whitespaces
    const emailValue2 = email2.value.trim();
    const passwordValue2 = password2.value.trim();

    if (emailValue2 === "") {
      setErrorFor(email2, "Email cannot be blank");
    } else if (!isEmail(emailValue2)) {
      setErrorFor(email2, "Not a valid email");
    } else {
      setSuccessFor(email2);
      if (passwordValue2 === "") {
        setErrorFor(password2, "Password cannot be blank");
      } else {
        setSuccessFor(password2);
        e.currentTarget.submit();
      }
    }
  }

  checkInputs2();
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//const signUpButton = document.getElementById("signUp");
//const signInButton = document.getElementById("signIn");
//const container = document.getElementById("container-column");
//
//signUpButton.addEventListener("click", () =>
//  container.classList.add("right-panel-active")
//);
//
//signInButton.addEventListener("click", () =>
//  container.classList.remove("right-panel-active")
//);
//
//console.log(signInButton);

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
