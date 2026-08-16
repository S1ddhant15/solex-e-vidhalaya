const CENTRAL_LOGIN_URL = "/solex-digital-portal/index.html?app=learning";
const CENTRAL_PORTAL_URL = "/solex-digital-portal/portal.html";

function getLearningSession() {
  try {
    const central = JSON.parse(sessionStorage.getItem("solexPortalSession") || "null");
    if (!central || Date.now() > central.expiresAt || !central.user?.apps?.includes("learning")) return null;
    const learningSession = {
      id: central.user.id,
      name: central.user.name,
      department: central.user.department,
      role: central.user.role,
      admin: Boolean(central.user.admin),
      permissions: central.user.permissions || []
    };
    sessionStorage.setItem("evidhayalaySession", JSON.stringify(learningSession));
    return learningSession;
  } catch {
    return null;
  }
}

const session = getLearningSession();
if (!session) {
  window.top.location.replace(CENTRAL_LOGIN_URL);
  throw new Error("Central portal login required.");
}

const learningAdmin = session.admin || session.role === "Learning Administrator" || session.department === "Human Resources";
const courses = [
  ["TOPCon Module Manufacturing", "Production", 68, "☀"],
  ["Pre-Lam & Post-Lam Defect Control", "Quality", 42, "◉"],
  ["Machine Alarm Troubleshooting with SAMA", "Maintenance", 20, "⚙"],
  ["MES & Power BI Analytics", "Digital", 0, "▥"],
  ["EHS, LOTO & Workplace Safety", "Safety", 0, "♢"],
  ["RCA, CAPA & Problem Solving", "Quality", 0, "◎"]
];

const box = document.querySelector("#courses");
const search = document.querySelector("#search");
const category = document.querySelector("#category");

function render() {
  const query = search.value.toLowerCase();
  const selectedCategory = category.value;
  box.innerHTML = courses
    .filter(course => course[0].toLowerCase().includes(query) && (selectedCategory === "All" || course[1] === selectedCategory))
    .map(course => `<article class="course"><div class="course-icon">${course[3]}</div><div class="course-info"><small>${course[1].toUpperCase()}</small><h4>${course[0]}</h4><p>${course[2] > 0 ? course[2] + "% completed" : "Not started"}</p><div class="bar"><i style="width:${course[2]}%"></i></div><button onclick="openCourse('${course[0].replaceAll("'", "")}')">${course[2] > 0 ? "Resume" : "Start"} Course</button></div></article>`)
    .join("") || "<p>No courses found.</p>";
}

render();
search.addEventListener("input", render);
category.addEventListener("change", render);

const adminButton = document.querySelector('[data-view="admin"]');
if (adminButton) adminButton.hidden = !learningAdmin;

document.querySelectorAll("nav button").forEach(button => button.addEventListener("click", () => {
  const view = button.dataset.view;
  if (view === "admin") {
    if (learningAdmin) window.location.href = "admin.html";
    return;
  }
  if (view === "assessment") { window.location.href = "course.html#assessment"; return; }
  if (view === "certificate") { window.location.href = "certificate.html"; return; }
  if (view === "learning") { window.location.href = "course.html"; return; }
  if (view === "sama") { window.top.location.href = `${CENTRAL_PORTAL_URL}?app=sama`; return; }
  document.querySelectorAll("nav button").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("#sectionTitle").textContent = button.innerText.replace("2", "").trim();
}));

const mobileMenu = document.querySelector("#mobileMenu");
const sidebar = document.querySelector(".sidebar");
mobileMenu.setAttribute("aria-expanded", "false");
mobileMenu.addEventListener("click", () => {
  const open = sidebar.classList.toggle("open");
  mobileMenu.setAttribute("aria-expanded", String(open));
});

document.querySelector("#departmentName").textContent = `${session.name} · ${session.department}`;

function logout() {
  sessionStorage.removeItem("evidhayalaySession");
  sessionStorage.removeItem("solexPortalSession");
  window.top.location.replace(CENTRAL_LOGIN_URL);
}

function updateClock() {
  document.querySelector("#liveClock").textContent = new Intl.DateTimeFormat("en-IN", {
    weekday: "long", day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  }).format(new Date());
}

updateClock();
setInterval(updateClock, 1000);

document.querySelectorAll(".kpis b[data-value]").forEach(element => {
  const target = Number(element.dataset.value);
  const suffix = element.dataset.suffix;
  let current = 0;
  const step = target / 35;
  const timer = setInterval(() => {
    current = Math.min(target, current + step);
    element.textContent = (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
    if (current >= target) clearInterval(timer);
  }, 25);
});

function openCourse(title) {
  if (title.includes("TOPCon")) { window.location.href = "course.html"; return; }
  const toast = document.querySelector("#toast");
  toast.textContent = title + " will be available soon";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}
