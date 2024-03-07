const hideableIcons = document.querySelectorAll(".hideable-icon");

hideableIcons.forEach((icon) => {
  icon.style.display = "inline-block";
});

function showError(elementId, errorMessage) {
  const errorElement = document.getElementById(elementId);

  if (errorElement) {
    errorElement.innerText = errorMessage;
    errorElement.style.display = "block";

    const inputElement = document.querySelector(
      `[id^=${elementId.replace("-error", "")}]`
    );
    if (inputElement) {
      inputElement.classList.add("error-input");
    }

    const iconWarning = document.getElementById(
      `warning-${elementId.replace("-error", "")}`
    );
    
    if (iconWarning) {
      if (iconWarning.style.display === "none") {
        iconWarning.style.display = "inline-block";
      }
    }

    const textWrap = inputElement
      .closest(".form-wrap")
      .querySelector(".form-input");
    
    if (textWrap) {
      textWrap.classList.add("error");
    }

    
    if (elementId.includes("passwordl-error")) {
      hideableIcons.forEach((icon) => {
        icon.style.display = "none";
      });
      hideIcons(elementId);
    } else {
      hideableIcons.forEach((icon) => {
        icon.style.display = "inline-block";
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
      `[id^=${elementId.replace("-error", "")}]`
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

    const textWrap = inputElement
      .closest(".form-wrap")
      .querySelector(".form-input");
    if (textWrap) {
      textWrap.classList.remove("error");
    }

    if (!elementId.includes("passwordl-error")) {
      hideableIcons.forEach((icon) => {
        icon.style.display = "inline-block";
      });
    }
  }
  hideableIcons.forEach((icon) => {
    icon.style.display = "inline-block";
  });
}

function hideIcons(elementId) {
    // check whether there is an error in the password field and hide the corresponding icon
  if (elementId.includes("passwordl-error")) {
    hideableIcons.forEach((icon) => {
      icon.style.display = "none";
    });
  } else {
    // If there are errors in other fields, show the icons
    hideableIcons.forEach((icon) => {
      icon.style.display = "inline-block";
    });
  }
}

function validateFieldLogin(fieldName, fieldValue) {
  const errorId = `${fieldName}-error`;

  switch (fieldName) {
    case "inputEmail":
      const emailError =
        fieldValue === ""
          ? "Field must not be empty"
          : validateEmail(fieldValue);
      showError(errorId, emailError);
      break;

    case "inputPassword":
      const passwordError =
        fieldValue === ""
          ? "Field must not be empty"
          : validatePassword(fieldValue);
      showError(errorId, passwordError);
      break;

    default:
      break;
  }
}

document
  .getElementById("add-loginform")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    


    validateFieldLogin("inputEmail", email);
    validateFieldLogin("inputPassword", password);

    const emailError = validateEmail(email);
    if (emailError !== "") {
      showError("email1-error", emailError);

      return false;
    } else {
      hideError("email1-error");
    }

    const passwordError = validatePassword(password);
    if (passwordError !== "") {
      showError("passwordl-error", passwordError);
      return false;
    } else {
      hideError("passwordl-error");
    }

    
  });
/*
const inputs = document.querySelectorAll(".form-control");
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
});*/
