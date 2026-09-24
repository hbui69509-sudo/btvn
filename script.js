const email = document.querySelector("#email");
const err = document.querySelector("#email-error");
const form = document.querySelector("#myForm"); // Đã khai báo biến form

function validateEmail() {
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  err.textContent = ok ? "" : "Email không hợp lệ";
  email.classList.toggle("invalid", !ok);
  return ok;
}

email.addEventListener("input", validateEmail);

form.addEventListener("submit", (e) => {
  // Nếu email không hợp lệ, chặn việc gửi form
  if (!validateEmail()) {
    e.preventDefault(); 
  } else {
    e.preventDefault(); // Chặn load lại trang để xem demo
    alert("Email hợp lệ! Form đã được gửi.");
  }
});
