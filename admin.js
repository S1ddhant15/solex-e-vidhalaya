// ======================================================
// SOLEX e-VIDHAYALAY — ADMIN COURSE MANAGEMENT
// ======================================================

const defaultCourses = [
  {
    id: 1,
    title: "TOPCon Manufacturing Fundamentals",
    department: "Production",
    lessons: 6,
    learners: 42,
    status: "Published"
  },
  {
    id: 2,
    title: "Solar Module Quality Inspection",
    department: "Quality",
    lessons: 5,
    learners: 31,
    status: "Published"
  },
  {
    id: 3,
    title: "Machine Preventive Maintenance",
    department: "Maintenance",
    lessons: 7,
    learners: 28,
    status: "Published"
  },
  {
    id: 4,
    title: "Shop Floor Safety",
    department: "Safety",
    lessons: 4,
    learners: 56,
    status: "Published"
  },
  {
    id: 5,
    title: "MES and Digital Manufacturing",
    department: "Digital",
    lessons: 5,
    learners: 24,
    status: "Published"
  },
  {
    id: 6,
    title: "TOPCon Final Assessment",
    department: "Production",
    lessons: 3,
    learners: 18,
    status: "Draft"
  }
];

let courses = JSON.parse(localStorage.getItem("solexCourses"));

if (!Array.isArray(courses) || courses.length === 0) {
  courses = defaultCourses;
  saveCourses();
}


// ======================================================
// ELEMENTS
// ======================================================

const courseContainer = document.getElementById("adminCourses");
const searchInput = document.getElementById("adminSearch");
const totalCourses = document.getElementById("totalCourses");

const addCourseButton = document.getElementById("addCourse");
const courseDialog = document.getElementById("courseDialog");
const courseForm = document.getElementById("courseForm");
const cancelDialogButton = document.getElementById("cancelDialog");

const newTitleInput = document.getElementById("newTitle");
const newDepartmentInput = document.getElementById("newDepartment");
const newLessonsInput = document.getElementById("newLessons");


// ======================================================
// SAVE COURSES
// ======================================================

function saveCourses() {
  localStorage.setItem("solexCourses", JSON.stringify(courses));
}


// ======================================================
// DEPARTMENT ICON
// ======================================================

function getDepartmentIcon(department) {
  const icons = {
    Production: "🏭",
    Quality: "🔍",
    Maintenance: "🛠️",
    Safety: "🦺",
    Digital: "💻"
  };

  return icons[department] || "📘";
}


// ======================================================
// COURSE STATUS CLASS
// ======================================================

function getStatusClass(status) {
  return status.toLowerCase() === "published"
    ? "status-published"
    : "status-draft";
}


// ======================================================
// DISPLAY COURSES
// ======================================================

function displayCourses(courseList = courses) {
  courseContainer.innerHTML = "";

  totalCourses.textContent = courses.length;

  if (courseList.length === 0) {
    courseContainer.innerHTML = `
      <div class="empty-course-message">
        <h3>No courses found</h3>
        <p>Try another search or add a new course.</p>
      </div>
    `;

    return;
  }

  courseList.forEach((course) => {
    const courseCard = document.createElement("article");

    courseCard.className = "admin-course-card";

    courseCard.innerHTML = `
      <div class="admin-course-icon">
        ${getDepartmentIcon(course.department)}
      </div>

      <div class="admin-course-info">
        <h3>${escapeHTML(course.title)}</h3>

        <p>
          ${escapeHTML(course.department)}
          • ${course.lessons} lessons
          • ${course.learners} learners
        </p>
      </div>

      <span class="course-status ${getStatusClass(course.status)}">
        ${escapeHTML(course.status)}
      </span>

      <div class="course-actions">
        <button
          class="status-button"
          onclick="changeCourseStatus(${course.id})"
          title="Change publication status"
        >
          ${course.status === "Published" ? "Unpublish" : "Publish"}
        </button>

        <button
          class="edit-button"
          onclick="editCourse(${course.id})"
          title="Edit course"
        >
          Edit
        </button>

        <button
          class="delete-button"
          onclick="deleteCourse(${course.id})"
          title="Delete course"
        >
          Delete
        </button>
      </div>
    `;

    courseContainer.appendChild(courseCard);
  });
}


// ======================================================
// OPEN ADD COURSE DIALOG
// ======================================================

addCourseButton.addEventListener("click", () => {
  courseForm.reset();
  newLessonsInput.value = 5;

  courseDialog.showModal();

  setTimeout(() => {
    newTitleInput.focus();
  }, 100);
});


// ======================================================
// CLOSE DIALOG
// ======================================================

cancelDialogButton.addEventListener("click", () => {
  courseDialog.close();
});

courseDialog.addEventListener("click", (event) => {
  const dialogBox = courseDialog.getBoundingClientRect();

  const clickedOutside =
    event.clientX < dialogBox.left ||
    event.clientX > dialogBox.right ||
    event.clientY < dialogBox.top ||
    event.clientY > dialogBox.bottom;

  if (clickedOutside) {
    courseDialog.close();
  }
});


// ======================================================
// ADD NEW COURSE
// ======================================================

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = newTitleInput.value.trim();
  const department = newDepartmentInput.value;
  const lessons = Number(newLessonsInput.value);

  if (!title) {
    alert("Please enter a course title.");
    return;
  }

  if (lessons < 1) {
    alert("A course must have at least one lesson.");
    return;
  }

  const newCourse = {
    id: Date.now(),
    title: title,
    department: department,
    lessons: lessons,
    learners: 0,
    status: "Draft"
  };

  courses.unshift(newCourse);

  saveCourses();
  displayCourses();

  courseDialog.close();

  showNotification("Course created successfully.");
});


// ======================================================
// SEARCH COURSES
// ======================================================

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredCourses = courses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchText) ||
      course.department.toLowerCase().includes(searchText) ||
      course.status.toLowerCase().includes(searchText)
    );
  });

  displayCourses(filteredCourses);
});


// ======================================================
// CHANGE COURSE STATUS
// ======================================================

function changeCourseStatus(courseId) {
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return;
  }

  course.status =
    course.status === "Published"
      ? "Draft"
      : "Published";

  saveCourses();
  displayCourses();

  showNotification(
    course.status === "Published"
      ? "Course published successfully."
      : "Course moved to draft."
  );
}


// ======================================================
// EDIT COURSE
// ======================================================

function editCourse(courseId) {
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return;
  }

  const updatedTitle = prompt(
    "Enter the updated course title:",
    course.title
  );

  if (updatedTitle === null) {
    return;
  }

  const cleanTitle = updatedTitle.trim();

  if (!cleanTitle) {
    alert("Course title cannot be empty.");
    return;
  }

  const updatedLessons = prompt(
    "Enter number of lessons:",
    course.lessons
  );

  if (updatedLessons === null) {
    return;
  }

  const lessonCount = Number(updatedLessons);

  if (!Number.isInteger(lessonCount) || lessonCount < 1) {
    alert("Please enter a valid number of lessons.");
    return;
  }

  course.title = cleanTitle;
  course.lessons = lessonCount;

  saveCourses();
  displayCourses();

  showNotification("Course updated successfully.");
}


// ======================================================
// DELETE COURSE
// ======================================================

function deleteCourse(courseId) {
  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return;
  }

  const confirmation = confirm(
    `Are you sure you want to delete "${course.title}"?`
  );

  if (!confirmation) {
    return;
  }

  courses = courses.filter((item) => item.id !== courseId);

  saveCourses();
  displayCourses();

  showNotification("Course deleted successfully.");
}


// ======================================================
// NOTIFICATION
// ======================================================

function showNotification(message) {
  const notification = document.createElement("div");

  notification.className = "admin-notification";
  notification.textContent = message;

  document.body.appendChild(notification);

  requestAnimationFrame(() => {
    notification.classList.add("show");
  });

  setTimeout(() => {
    notification.classList.remove("show");

    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2500);
}


// ======================================================
// BASIC HTML SECURITY
// ======================================================

function escapeHTML(value) {
  const element = document.createElement("div");

  element.textContent = String(value);

  return element.innerHTML;
}


// ======================================================
// INITIAL LOAD
// ======================================================

displayCourses();

// Register the e-Vidhayalay service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        console.log("e-Vidhayalay offline service is active.");
      })
      .catch((error) => {
        console.error("Service worker registration failed:", error);
      });
  });
}
