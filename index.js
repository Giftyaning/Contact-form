document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("subscribe")
  const emailSuccess = document.getElementById("emailsuccess")
  const mainContainer = document.querySelector(".main")
  const dismissButton = emailSuccess.querySelector("button")
  const container = document.querySelector('.container')


  button.addEventListener("click", function (event) {
    event.preventDefault(); 
    mainContainer.style.display = "none";
    emailSuccess.style.display = "flex";
    container.style.maxWidth = "30em";
  });


  dismissButton.addEventListener("click", function () {
    emailSuccess.style.display = "none";
    mainContainer.style.display = "flex";
  });
});
