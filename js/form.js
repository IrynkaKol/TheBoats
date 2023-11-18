const hideableIcons1 = document.querySelectorAll(".hideable-icon-1");
const hideableIcons2 = document.querySelectorAll(".hideable-icon-2");

hideableIcons1.forEach((icon) => {
  icon.style.display = "inline-block";
});

hideableIcons2.forEach((icon) => {
  icon.style.display = "inline-block";
});

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.innerText = errorMessage;
    errorElement.style.display = "block";

    const inputElement = document.querySelector(
      `[name=${elementId.replace("-error", "")}]`
    );
    if (inputElement) {
      inputElement.classList.add("error-input");
    }

    const iconWarning = document.getElementById(
      `warning-${elementId.replace("-error", "")}`
    );
    if (iconWarning) {
      iconWarning.style.display = "inline-block";
    }

    if (
      elementId.includes("password-error") ||
      elementId.includes("confirm-error")
    ) {
      hideableIcons1.forEach((icon) => {
        icon.style.display = "none";
      });

      hideableIcons2.forEach((icon) => {
        icon.style.display = "none";
      });
    }
  }
}

function hideError(elementId) {
  const errorElement = document.getElementById(elementId);
  if (errorElement) {
    errorElement.innerText = "";
    errorElement.style.display = "none";

    const inputElement = document.querySelector(
      `[name=${elementId.replace("-error", "")}]`
    );
    if (inputElement) {
      inputElement.classList.remove("error-input");
    }

    const iconWarning = document.getElementById(
      `warning-${elementId.replace("-error", "")}`
    );
    if (iconWarning) {
      iconWarning.style.display = "none";
    }

    console.log(hideableIcons1);
    console.log(hideableIcons2);
    hideableIcons1.forEach((icon) => {
      icon.style.display = "inline-block";
    });

    hideableIcons2.forEach((icon) => {
      icon.style.display = "inline-block";
    });
  }
}

function validateField(fieldName, fieldValue) {
  const errorId = `${fieldName}-error`;

  switch (fieldName) {
    case "inputEmail1":
      const emailError =
        fieldValue === ""
          ? "Field must not be empty"
          : validateEmail(fieldValue);
      showError(errorId, emailError);
      break;
    case "inputUsername":
      const usernameError =
        fieldValue === ""
          ? "Field must not be empty"
          : validateUsername(fieldValue);
      showError(errorId, usernameError);
      break;
    case "passwordInput1":
      const passwordError =
        fieldValue === ""
          ? "Field must not be empty"
          : validatePassword(fieldValue);
      showError(errorId, passwordError);
      break;
    case "passwordInput2":
      const password2 = document.getElementById("passwordInput2").value;
      const confirmPasswordError =
        fieldValue === ""
          ? "Field must not be empty"
          : validatePasswordConfirmation(password2, fieldValue);
      showError(errorId, confirmPasswordError);
      break;
    default:
      break;
  }
}

document.getElementById("add-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("inputEmail1").value;
  const username = document.getElementById("inputUsername").value;
  const password1 = document.getElementById("passwordInput1").value;
  const password2 = document.getElementById("passwordInput2").value;

  validateField("inputEmail1", email);
  validateField("inputUsername", username);
  validateField("passwordInput1", password1);
  validateField("passwordInput2", password2);

  const emailError = validateEmail(email);
  if (emailError !== "") {
    showError("email-error", emailError);
    return false;
  } else {
    hideError("email-error");
  }

  const usernameError = validateUsername(username);
  if (usernameError !== "") {
    showError("username-error", usernameError);
    return false;
  } else {
    hideError("username-error");
  }

  const passwordError = validatePassword(password1);
  if (passwordError !== "") {
    showError("password-error", passwordError);
    return false;
  } else {
    hideError("password-error");
  }

  const confirmPasswordError = validatePasswordConfirmation(
    password1,
    password2
  );
  if (confirmPasswordError !== "") {
    showError("confirm-error", confirmPasswordError);
    return false;
  } else {
    hideError("confirm-error");
  }

  // alert('Form is valid');
  document.getElementById("registration").style.display = "none";
  document.getElementById("success-message").style.display = "block";
});

const inputs = document.querySelectorAll(".form__input");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
  });

  input.addEventListener("blur", function () {
    if (!this.value.trim()) {
      this.setAttribute("placeholder", this.getAttribute("data-placeholder"));
    }
  });

  input.addEventListener("change", function () {
    validateField(this.id, this.value);
  });
});

function validatePasswordConfirmation(password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  } else {
    return "";
  }
}
