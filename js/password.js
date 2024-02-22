
function passwordVisibility(passwordId) {
    let inputPass = document
      .getElementById(passwordId)
      .getElementsByClassName('form-control')[0];
    let hideButton = document.querySelector(`#${passwordId} .hide`);
  
    if (inputPass) {
      if (inputPass.getAttribute("type") === "password") {
        inputPass.setAttribute("type", "text");
        hideButton.classList.add("show");
      } else {
        inputPass.setAttribute("type", "password");
        hideButton.classList.remove("show");
      }
    }
  
    return false;
  }