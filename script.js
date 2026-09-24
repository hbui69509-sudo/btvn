const email = document.querySelector("#email");
const err = document.querySelector("#email-error");
const form = document.querySelector("#myForm");

function validateEmail() {
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  err.textContent = ok ? "" : "Email không hợp lệ";
  email.classList.toggle("invalid", !ok);
  return ok;
}

email.addEventListener("input", validateEmail);

form.addEventListener("submit", (e) => {
  if (!validateEmail()) {
    e.preventDefault(); 
  } else {
    e.preventDefault();
    alert("Email hợp lệ! Form đã được gửi.");
  }
});
