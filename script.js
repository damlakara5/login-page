const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
const icon = document.querySelector(".icon");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye / eye slash icon
  icon.classList.toggle("bi-eye");
  icon.classList.toggle("bi-eye-slash");
});
