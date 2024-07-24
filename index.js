document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("subscribe");
  const emailInput = document.getElementById("email");
  const emailSuccess = document.getElementById("emailsuccess");
  const mainContainer = document.querySelector(".main");
  const dismissButton = emailSuccess.querySelector("button");
  const emailLabel = document.querySelector("label[for='email']");

  const errorContainer = document.createElement("div");
  errorContainer.style.color = "red";
  errorContainer.style.display = "none";
  emailLabel.insertAdjacentElement("afterend", errorContainer);

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  button.addEventListener("click", function (event) {
    event.preventDefault();
    const email = emailInput.value;
    if (validateEmail(email)) {
      errorContainer.style.display = "none";
      mainContainer.style.display = "none";
      emailSuccess.style.display = "flex";
      emailSuccess.style.maxWidth = "30em"; // Adjust width for emailSuccess
    } else {
      errorContainer.textContent = "Please enter a valid email address.";
      errorContainer.style.display = "block";
    }
  });

  dismissButton.addEventListener("click", function () {
    emailSuccess.style.display = "none";
    mainContainer.style.display = "flex";
    emailInput.value = ""; // Reset the email input
    errorContainer.style.display = "none"; // Hide the error message
  });
});
