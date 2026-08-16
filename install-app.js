// ======================================================
// SOLEX e-VIDHAYALAY — APPLICATION INSTALLATION
// ======================================================

let deferredInstallPrompt = null;


// ======================================================
// CREATE INSTALL BUTTON
// ======================================================

function createInstallButton() {
  if (document.getElementById("installPortalButton")) {
    return;
  }

  const installButton = document.createElement("button");

  installButton.id = "installPortalButton";
  installButton.type = "button";
  installButton.innerHTML = "⬇ Install e-Vidhayalay";

  installButton.setAttribute(
    "aria-label",
    "Install Solex e-Vidhayalay application"
  );

  Object.assign(installButton.style, {
    position: "fixed",
    right: "24px",
    bottom: "24px",
    zIndex: "9999",
    padding: "13px 20px",
    border: "none",
    borderRadius: "12px",
    color: "#ffffff",
    background: "linear-gradient(135deg, #f57e20, #dd6811)",
    boxShadow: "0 10px 25px rgba(245, 126, 32, 0.35)",
    fontSize: "14px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease"
  });

  installButton.addEventListener("mouseenter", () => {
    installButton.style.transform = "translateY(-3px)";
    installButton.style.boxShadow =
      "0 14px 30px rgba(245, 126, 32, 0.42)";
  });

  installButton.addEventListener("mouseleave", () => {
    installButton.style.transform = "translateY(0)";
    installButton.style.boxShadow =
      "0 10px 25px rgba(245, 126, 32, 0.35)";
  });

  installButton.addEventListener("click", installApplication);

  document.body.appendChild(installButton);
}


// ======================================================
// REMOVE INSTALL BUTTON
// ======================================================

function removeInstallButton() {
  const installButton =
    document.getElementById("installPortalButton");

  if (installButton) {
    installButton.remove();
  }
}


// ======================================================
// CAPTURE BROWSER INSTALL EVENT
// ======================================================

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  deferredInstallPrompt = event;

  createInstallButton();
});


// ======================================================
// INSTALL APPLICATION
// ======================================================

async function installApplication() {
  if (!deferredInstallPrompt) {
    showInstallMessage(
      "Installation is not available. Use your browser menu and select Install App."
    );

    return;
  }

  deferredInstallPrompt.prompt();

  const result = await deferredInstallPrompt.userChoice;

  if (result.outcome === "accepted") {
    showInstallMessage(
      "e-Vidhayalay installation started successfully."
    );
  } else {
    showInstallMessage(
      "Application installation was cancelled."
    );
  }

  deferredInstallPrompt = null;

  removeInstallButton();
}


// ======================================================
// INSTALLATION COMPLETE
// ======================================================

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;

  removeInstallButton();

  showInstallMessage(
    "Solex e-Vidhayalay has been installed successfully."
  );
});


// ======================================================
// CHECK IF APPLICATION IS ALREADY INSTALLED
// ======================================================

function isApplicationInstalled() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

if (isApplicationInstalled()) {
  removeInstallButton();
}


// ======================================================
// NOTIFICATION MESSAGE
// ======================================================

function showInstallMessage(message) {
  const existingMessage =
    document.getElementById("installMessage");

  if (existingMessage) {
    existingMessage.remove();
  }

  const messageBox = document.createElement("div");

  messageBox.id = "installMessage";
  messageBox.textContent = message;

  Object.assign(messageBox.style, {
    position: "fixed",
    left: "50%",
    bottom: "90px",
    zIndex: "10000",
    maxWidth: "90%",
    padding: "13px 20px",
    color: "#ffffff",
    background: "#454a4f",
    borderLeft: "5px solid #f57e20",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
    fontSize: "14px",
    textAlign: "center",
    transform
