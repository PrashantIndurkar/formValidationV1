const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show input Success message
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// EventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // username
  if (username.value === "") {
    showError(username, "username is required");
  } else {
    showSuccess(username);
  }

  // 	Email
  if (email.value === "") {
    showError(email, "Email Is Required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email Is not valid");
  } else {
    showSuccess(email);
  }

  // 	Password
  if (password.value === "") {
    showError(password, "password Is Required");
  } else {
    showSuccess(password);
  }

  // 	username
  if (password2.value === "") {
    showError(password2, "Conformpassword Is Required");
  } else {
    showSuccess(password2);
  }
});
