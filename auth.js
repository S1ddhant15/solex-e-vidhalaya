const CENTRAL_LEARNING_LOGIN = "/solex-digital-portal/index.html?app=learning";
const continueButton = document.getElementById("continueButton");

function openCentralLogin() {
  window.top.location.replace(CENTRAL_LEARNING_LOGIN);
}

continueButton.addEventListener("click", openCentralLogin);
setTimeout(openCentralLogin, 900);
