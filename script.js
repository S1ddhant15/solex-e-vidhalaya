const courses = [
    [
        "Solar Module Manufacturing",
        "Technical",
        "Intermediate · 12 lessons",
        "☀"
    ],
    [
        "Lean Manufacturing Essentials",
        "Operations",
        "Beginner · 9 lessons",
        "↗"
    ],
    [
        "Power BI for Manufacturing",
        "Digital",
        "Intermediate · 14 lessons",
        "▥"
    ],
    [
        "Workplace Safety & 5S",
        "Safety",
        "Beginner · 8 lessons",
        "♢"
    ],
    [
        "Root Cause Analysis",
        "Quality",
        "Advanced · 10 lessons",
        "◎"
    ],
    [
        "Leadership for New Managers",
        "Leadership",
        "Intermediate · 11 lessons",
        "♟"
    ]
];

const courseList = document.querySelector("#courses");
const searchInput = document.querySelector("#search");
const categoryFilter = document.querySelector("#category");
const menuButton = document.querySelector("#menu");
const sidebar = document.querySelector("#sidebar");

function renderCourses() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    const filteredCourses = courses.filter((course) => {
        const courseTitle = course[0];
        const courseCategory = course[1];

        const matchesSearch =
            `${courseTitle} ${courseCategory}`
                .toLowerCase()
                .includes(searchText);

        const matchesCategory =
            selectedCategory === "All" ||
            courseCategory === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    if (filteredCourses.length === 0) {
        courseList.innerHTML = `
            <div class="empty-message">
                No matching courses found.
            </div>
        `;
        return;
    }

    courseList.innerHTML = filteredCourses
        .map((course) => {
            const [title, category, details, icon] = course;

            return `
                <article class="course">
                    <div class="thumb">${icon}</div>

                    <div class="details">
                        <small>
                            ${category} · ${details}
                        </small>

                        <h3>${title}</h3>

                        <button
                            type="button"
                            onclick="openCourse('${title}')"
                        >
                            Start learning
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
}

function openCourse(courseTitle) {
    alert(`Opening ${courseTitle}`);
}

function setActiveNavigation(selectedButton) {
    document.querySelectorAll("nav button").forEach((button) => {
        button.classList.remove("active");
    });

    selectedButton.classList.add("active");
}

searchInput.addEventListener("input", renderCourses);
categoryFilter.addEventListener("change", renderCourses);

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});

document.querySelectorAll("nav button").forEach((button) => {
    button.addEventListener("click", () => {
        setActiveNavigation(button);

        if (window.innerWidth <= 720) {
            sidebar.classList.remove("open");
        }
    });
});

renderCourses();
