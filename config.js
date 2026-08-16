// ======================================================
// SOLEX DIGITAL ECOSYSTEM — CENTRAL CONFIGURATION
// ======================================================

const SOLEX_CONFIG = {
  company: {
    name: "Solex Energies Limited",
    portalName: "Solex Digital Ecosystem",
    learningPortal: "e-Vidhayalay"
  },

  applications: {
    home: {
      name: "Digital Ecosystem",
      url: "index.html"
    },

    learning: {
      name: "e-Vidhayalay",
      url: "index.html",
      icon: "🎓",
      departments: [
        "Production",
        "Quality",
        "Maintenance",
        "PPC",
        "Management",
        "Admin"
      ]
    },

    mes: {
      name: "MES Dashboard",
      url: "https://s1ddhant15.github.io/solex-mes-portal/",
      icon: "📊",
      departments: [
        "Production",
        "Quality",
        "Maintenance",
        "PPC",
        "Management"
      ]
    },

    sama: {
      name: "SAMA AI Assistant",
      url: "https://s1ddhant15.github.io/solex-ai-maintenance/",
      icon: "🤖",
      departments: [
        "Maintenance",
        "Production",
        "Management"
      ]
    }
  },

  roles: {
    learner: {
      label: "Learner",
      allowedApplications: [
        "learning"
      ]
    },

    production: {
      label: "Production Department",
      allowedApplications: [
        "learning",
        "mes"
      ]
    },

    quality: {
      label: "Quality Department",
      allowedApplications: [
        "learning",
        "mes"
      ]
    },

    maintenance: {
      label: "Maintenance Department",
      allowedApplications: [
        "learning",
        "mes",
        "sama"
      ]
    },

    ppc: {
      label: "PPC Department",
      allowedApplications: [
        "learning",
        "mes"
      ]
    },

    management: {
      label: "Management",
      allowedApplications: [
        "learning",
        "mes",
        "sama"
      ]
    },

    admin: {
      label: "Administrator",
      allowedApplications: [
        "learning",
        "mes",
        "sama"
      ]
    }
  },

  theme: {
    primary: "#f57e20",
    primaryDark: "#d86611",
    dark: "#454a4f",
    grey: "#70757a",
    lightGrey: "#edf0f2",
    white: "#ffffff"
  }
};


// ======================================================
// GET CURRENT USER
// ======================================================

function getCurrentUser() {
  try {
    return JSON.parse(
      sessionStorage.getItem("solexCurrentUser")
    );
  } catch (error) {
    return null;
  }
}


// ======================================================
// SAVE CURRENT USER
// ======================================================

function saveCurrentUser(user) {
  sessionStorage.setItem(
    "solexCurrentUser",
    JSON.stringify(user)
  );
}


// ======================================================
// CHECK APPLICATION ACCESS
// ======================================================

function canAccessApplication(applicationKey) {
  const user = getCurrentUser();

  if (!user || !user.role) {
    return false;
  }

  const roleSettings =
    SOLEX_CONFIG.roles[user.role.toLowerCase()];

  if (!roleSettings) {
    return false;
  }

  return roleSettings.allowedApplications.includes(
    applicationKey
  );
}


// ======================================================
// OPEN APPLICATION
// ======================================================

function openSolexApplication(applicationKey) {
  const application =
    SOLEX_CONFIG.applications[applicationKey];

  if (!application) {
    alert("Application configuration was not found.");
    return;
  }

  if (!canAccessApplication(applicationKey)) {
    alert(
      "You do not have permission to access this application."
    );

    return;
  }

  window.location.href = application.url;
}


// ======================================================
// LOGOUT
// ======================================================

function logoutFromSolexPortal() {
  sessionStorage.removeItem("solexCurrentUser");
  sessionStorage.removeItem("solexLoggedIn");

  window.location.href = "login.html";
}


// ======================================================
// PROTECT A PAGE
// ======================================================

function protectPage() {
  const loggedIn =
    sessionStorage.getItem("solexLoggedIn");

  if (loggedIn !== "true") {
    window.location.replace("login.html");
  }
}
