const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailMessage = document.getElementById("emailMessage");
const passwordMessage = document.getElementById("passwordMessage");
const finalMessage = document.getElementById("finalMessage");
const submitBtn = document.getElementById("submitBtn");
const form = document.querySelector("form");

function handleSubmit(e) {
  e.preventDefault();
  const userConfirmed = confirm("Are you sure you want to submit?");
  if(userConfirmed){
    alert("Successful signup!")
  } else {
    form.reset();
    emailMessage.textContent = "";
    passwordMessage.textContent = "";
    finalMessage.style.display = "none";
    submitBtn.disabled = true;
  }
}

form.addEventListener("submit", handleSubmit);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

function validateEmail() {
  let emailValue = emailInput.value;
  if (
    emailValue <= 3 ||
    !emailValue.includes("@") ||
    !emailValue.includes(".")
  ) {
    emailMessage.textContent =
      "Email must be longer than 3 characters and include '@' and '.'";
    emailMessage.style.display = "block";
    return false;
  } else {
    emailMessage.textContent = "";
    return true;
  }
}

function validatePassword() {
  let passwordValue = passwordInput.value;
  if (passwordValue.length < 8) {
    passwordMessage.textContent = "Password must be longer than 8 characters";
    passwordMessage.style.display = "block";
    return false;
  } else {
    passwordMessage.textContent = "";
    return true;
  }
}

function checkAllValid() {
  if (validateEmail() && validatePassword()) {
    submitBtn.disabled = false;
    finalMessage.style.display = "block";
    finalMessage.textContent = "All looks good";
    emailMessage.style.display = "none";
    passwordMessage.style.display = "none";
  } else {
    submitBtn.disabled = true;
    finalMessage.style.display = "none";
  }
}

emailInput.addEventListener("input",checkAllValid);
passwordInput.addEventListener("input",checkAllValid);
