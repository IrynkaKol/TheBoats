function togglePasswordVisibility(target) {
  let input = document.getElementById("inputPassword");

  if (input.getAttribute("type") === "password") {
    target.classList.add("show");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("show");
    input.setAttribute("type", "password");
  }
  return false;
}
