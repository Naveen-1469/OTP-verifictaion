// Dropdown functionality
const dropdownbtn = document.querySelector(".dropdown-btn");
const dropdownContainer = document.querySelector(".dropdown-container");
dropdownbtn.addEventListener("click", () => {
  dropdownContainer.style.display =
    dropdownContainer.style.display === "block" ? "none" : "block";
});

// OTP input auto focus
const inputs = document.querySelectorAll(".otp-inputs input");
inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    if (e.target.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && e.target.value.length === 0 && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Resend OTP timer
let timeLeft = 30;
const timerElement = document.getElementById("timer");
const resendBtn = document.getElementById("resendBtn");
resendBtn.disabled = true;

const countdown = setInterval(() => {
  timeLeft--;
  timerElement.textContent = `Resend in ${timeLeft}s`;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerElement.textContent = "";
    resendBtn.disabled = false;
  }
}, 1000);

resendBtn.addEventListener("click", () => {
  alert("OTP Resent");
  timeLeft = 30;
  resendBtn.disabled = true;
  const newCountdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Resend in ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(newCountdown);
      timerElement.textContent = "";
      resendBtn.disabled = false;
    }
  }, 1000);
});

// Form submission
document.getElementById("otp-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const otp = Array.from(inputs)
    .map((input) => input.value)
    .join("");
  alert(`OTP entered: ${otp}`);
});
