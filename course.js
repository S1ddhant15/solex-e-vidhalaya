// =====================================================
// SOLEX e-VIDHAYALAY
// TOPCon Course Controller
// File: course.js
// =====================================================


// =====================================================
// COURSE LESSONS
// =====================================================

const lessons = [

    // LESSON 1

    {
        icon: "☀",

        title: {
            en: "Introduction to TOPCon Technology",
            hi: "TOPCon तकनीक का परिचय",
            gu: "TOPCon ટેકનોલોજીનો પરિચય"
        },

        body: {

            en: `
                <h2>What is TOPCon?</h2>

                <p>
                    TOPCon means Tunnel Oxide Passivated Contact.
                    It is a high-efficiency N-type solar-cell technology.
                </p>

                <p>
                    A thin tunnel-oxide layer and doped polysilicon
                    contact reduce recombination losses and improve
                    overall cell efficiency.
                </p>

                <h3>Main Benefits</h3>

                <div class="key-points">

                    <span>
                        Higher conversion efficiency
                    </span>

                    <span>
                        Lower degradation
                    </span>

                    <span>
                        Better temperature coefficient
                    </span>

                </div>
            `,

            hi: `
                <h2>TOPCon क्या है?</h2>

                <p>
                    TOPCon का अर्थ Tunnel Oxide Passivated Contact है।
                    यह उच्च दक्षता वाली N-Type सोलर सेल तकनीक है।
                </p>

                <h3>मुख्य लाभ</h3>

                <div class="key-points">

                    <span>
                        उच्च रूपांतरण दक्षता
                    </span>

                    <span>
                        कम डिग्रेडेशन
                    </span>

                    <span>
                        बेहतर तापमान प्रदर्शन
                    </span>

                </div>
            `,

            gu: `
                <h2>TOPCon શું છે?</h2>

                <p>
                    TOPCon નો અર્થ Tunnel Oxide Passivated Contact છે.
                    આ ઉચ્ચ કાર્યક્ષમતા ધરાવતી N-Type સોલર સેલ
                    ટેકનોલોજી છે.
                </p>

                <h3>મુખ્ય લાભ</h3>

                <div class="key-points">

                    <span>
                        વધુ કાર્યક્ષમતા
                    </span>

                    <span>
                        ઓછું ડિગ્રેડેશન
                    </span>

                    <span>
                        સારું તાપમાન પ્રદર્શન
                    </span>

                </div>
            `
        }
    },


    // LESSON 2

    {
        icon: "▦",

        title: {
            en: "Cell Loading and Stringing",
            hi: "सेल लोडिंग और स्ट्रिंगिंग",
            gu: "સેલ લોડિંગ અને સ્ટ્રિંગિંગ"
        },

        body: {

            en: `
                <h2>Cell Preparation and Stringing</h2>

                <p>
                    Before loading cells into the stringer, verify
                    the cell type, power bin, colour, efficiency,
                    size and orientation.
                </p>

                <p>
                    Correct machine parameters are essential to
                    prevent cell cracks, poor soldering and ribbon
                    misalignment.
                </p>

                <h3>Critical Controls</h3>

                <div class="key-points">

                    <span>
                        Correct cell orientation
                    </span>

                    <span>
                        Stable soldering temperature
                    </span>

                    <span>
                        Proper ribbon alignment
                    </span>

                    <span>
                        Controlled cell gap
                    </span>

                    <span>
                        Peel-strength verification
                    </span>

                    <span>
                        Micro-crack prevention
                    </span>

                </div>
            `,

            hi: `
                <h2>सेल तैयारी और स्ट्रिंगिंग</h2>

                <p>
                    सेल लोड करने से पहले सेल का प्रकार,
                    पावर बिन, रंग, दक्षता, आकार और दिशा जाँचें।
                </p>

                <p>
                    सेल क्रैक और खराब सोल्डरिंग रोकने के लिए
                    तापमान, रिबन अलाइनमेंट और सेल गैप नियंत्रित रखें।
                </p>

                <div class="key-points">

                    <span>सही सेल दिशा</span>
                    <span>स्थिर सोल्डरिंग तापमान</span>
                    <span>सही रिबन अलाइनमेंट</span>

                </div>
            `,

            gu: `
                <h2>સેલ તૈયારી અને સ્ટ્રિંગિંગ</h2>

                <p>
                    સેલ લોડ કરતાં પહેલાં સેલ પ્રકાર, પાવર બિન,
                    રંગ, કાર્યક્ષમતા, સાઇઝ અને દિશા ચકાસો.
                </p>

                <p>
                    સેલ ક્રેક અને ખરાબ સોલ્ડરિંગ અટકાવવા માટે
                    તાપમાન, રિબન એલાઇનમેન્ટ અને સેલ ગેપ નિયંત્રિત રાખો.
                </p>

                <div class="key-points">

                    <span>સાચી સેલ દિશા</span>
                    <span>સ્થિર સોલ્ડરિંગ તાપમાન</span>
                    <span>યોગ્ય રિબન એલાઇનમેન્ટ</span>

                </div>
            `
        }
    },


    // LESSON 3

    {
        icon: "⇄",

        title: {
            en: "Layup and Material Control",
            hi: "लेअप और सामग्री नियंत्रण",
            gu: "લેઅપ અને મટિરિયલ કંટ્રોલ"
        },

        body: {

            en: `
                <h2>Accurate Module Layup</h2>

                <p>
                    Module layup determines the alignment and
                    traceability of all materials used in the module.
                </p>

                <h3>Materials to Verify</h3>

                <div class="key-points">

                    <span>Glass cleanliness</span>
                    <span>EVA or POE orientation</span>
                    <span>String positioning</span>
                    <span>Bussing alignment</span>
                    <span>Barcode traceability</span>
                    <span>Backsheet or rear-glass alignment</span>

                </div>

                <p>
                    Wrong material orientation or poor alignment can
                    cause bubbles, string shifting, electrical mismatch
                    and cosmetic rejection.
                </p>
            `,

            hi: `
                <h2>सटीक मॉड्यूल लेअप</h2>

                <p>
                    ग्लास की सफाई, EVA/POE की दिशा, स्ट्रिंग पोजिशन,
                    बसिंग, बारकोड और बैकशीट अलाइनमेंट की जाँच करें।
                </p>

                <div class="key-points">

                    <span>ग्लास की सफाई</span>
                    <span>सही EVA/POE दिशा</span>
                    <span>बारकोड ट्रेसबिलिटी</span>

                </div>
            `,

            gu: `
                <h2>ચોક્કસ મોડ્યુલ લેઅપ</h2>

                <p>
                    ગ્લાસ સફાઈ, EVA/POE દિશા, સ્ટ્રિંગ પોઝિશન,
                    બસિંગ, બારકોડ અને બેકશીટ એલાઇનમેન્ટ ચકાસો.
                </p>

                <div class="key-points">

                    <span>ગ્લાસ સફાઈ</span>
                    <span>સાચી EVA/POE દિશા</span>
                    <span>બારકોડ ટ્રેસેબિલિટી</span>

                </div>
            `
        }
    },


    // LESSON 4

    {
        icon: "▰",

        title: {
            en: "Lamination Process",
            hi: "लैमिनेशन प्रक्रिया",
            gu: "લેમિનેશન પ્રક્રિયા"
        },

        body: {

            en: `
                <h2>Lamination Critical Controls</h2>

                <p>
                    Lamination bonds the module materials together
                    using controlled vacuum, heat, pressure and time.
                </p>

                <h3>Parameters to Monitor</h3>

                <div class="key-points">

                    <span>Vacuum pressure</span>
                    <span>Heating-zone temperature</span>
                    <span>Lamination recipe</span>
                    <span>Cycle time</span>
                    <span>Membrane condition</span>
                    <span>Cooling time</span>

                </div>

                <h3>Possible Defects</h3>

                <p>
                    Incorrect lamination settings may cause bubbles,
                    delamination, cell shifting, broken cells,
                    encapsulant overflow or poor crosslinking.
                </p>
            `,

            hi: `
                <h2>लैमिनेशन के महत्वपूर्ण नियंत्रण</h2>

                <p>
                    लैमिनेशन के दौरान रेसिपी, वैक्यूम प्रेशर,
                    तापमान, साइकिल टाइम और कूलिंग की जाँच करें।
                </p>

                <div class="key-points">

                    <span>वैक्यूम प्रेशर</span>
                    <span>तापमान</span>
                    <span>साइकिल टाइम</span>
                    <span>मेम्ब्रेन की स्थिति</span>

                </div>
            `,

            gu: `
                <h2>લેમિનેશનના મહત્વના નિયંત્રણો</h2>

                <p>
                    લેમિનેશન દરમિયાન રેસિપી, વેક્યૂમ પ્રેશર,
                    તાપમાન, સાયકલ ટાઇમ અને કૂલિંગ ચકાસો.
                </p>

                <div class="key-points">

                    <span>વેક્યૂમ પ્રેશર</span>
                    <span>તાપમાન</span>
                    <span>સાયકલ ટાઇમ</span>
                    <span>મેમ્બ્રેનની સ્થિતિ</span>

                </div>
            `
        }
    },


    // LESSON 5

    {
        icon: "◎",

        title: {
            en: "EL and Visual Inspection",
            hi: "EL और दृश्य निरीक्षण",
            gu: "EL અને વિઝ્યુઅલ ઇન્સ્પેક્શન"
        },

        body: {

            en: `
                <h2>Defect Detection</h2>

                <p>
                    Electroluminescence inspection is used to identify
                    electrical and structural defects that may not be
                    visible to the human eye.
                </p>

                <h3>EL Defects</h3>

                <div class="key-points">

                    <span>Micro-cracks</span>
                    <span>Inactive areas</span>
                    <span>Soldering defects</span>
                    <span>Cell mismatch</span>
                    <span>Broken fingers</span>
                    <span>Dark cells</span>

                </div>

                <h3>Visual Defects</h3>

                <p>
                    Visual inspection confirms bubbles, foreign material,
                    cell alignment, string gap, backsheet condition,
                    frame condition and cosmetic defects.
                </p>
            `,

            hi: `
                <h2>दोष पहचान</h2>

                <p>
                    माइक्रो-क्रैक, इनएक्टिव एरिया, सोल्डरिंग दोष,
                    डार्क सेल और मिसमैच के लिए EL निरीक्षण करें।
                </p>

                <div class="key-points">

                    <span>माइक्रो-क्रैक</span>
                    <span>डार्क सेल</span>
                    <span>सोल्डरिंग दोष</span>

                </div>
            `,

            gu: `
                <h2>ખામીની ઓળખ</h2>

                <p>
                    માઇક્રો-ક્રેક, ઇનએક્ટિવ વિસ્તાર, સોલ્ડરિંગ ખામી,
                    ડાર્ક સેલ અને મિસમેચ માટે EL ઇન્સ્પેક્શન કરો.
                </p>

                <div class="key-points">

                    <span>માઇક્રો-ક્રેક</span>
                    <span>ડાર્ક સેલ</span>
                    <span>સોલ્ડરિંગ ખામી</span>

                </div>
            `
        }
    },


    // LESSON 6

    {
        icon: "✓",

        title: {
            en: "Final Testing and Quality",
            hi: "अंतिम परीक्षण और गुणवत्ता",
            gu: "અંતિમ પરીક્ષણ અને ગુણવત્તા"
        },

        body: {

            en: `
                <h2>Final Module Verification</h2>

                <p>
                    Every completed module must pass the approved
                    electrical, safety and appearance requirements.
                </p>

                <h3>Final Tests</h3>

                <div class="key-points">

                    <span>Sun-simulator test</span>
                    <span>Hi-Pot test</span>
                    <span>Ground-continuity test</span>
                    <span>Insulation test</span>
                    <span>Final visual inspection</span>
                    <span>Barcode verification</span>

                </div>

                <p>
                    Module grading must follow approved product
                    specifications. All test results must remain
                    connected to the unique module barcode.
                </p>
            `,

            hi: `
                <h2>अंतिम मॉड्यूल सत्यापन</h2>

                <p>
                    सन सिम्युलेटर, हाई-पॉट, ग्राउंडिंग,
                    इंसुलेशन और अंतिम विजुअल टेस्ट पूरे करें।
                </p>

                <div class="key-points">

                    <span>सन सिम्युलेटर</span>
                    <span>हाई-पॉट टेस्ट</span>
                    <span>अंतिम निरीक्षण</span>

                </div>
            `,

            gu: `
                <h2>અંતિમ મોડ્યુલ ચકાસણી</h2>

                <p>
                    સન સિમ્યુલેટર, હાઇ-પોટ, ગ્રાઉન્ડિંગ,
                    ઇન્સ્યુલેશન અને અંતિમ વિઝ્યુઅલ ટેસ્ટ પૂર્ણ કરો.
                </p>

                <div class="key-points">

                    <span>સન સિમ્યુલેટર</span>
                    <span>હાઇ-પોટ ટેસ્ટ</span>
                    <span>અંતિમ ઇન્સ્પેક્શન</span>

                </div>
            `
        }
    }
];


// =====================================================
// FINAL QUIZ
// =====================================================

const quiz = [

    {
        question: "What does TOPCon stand for?",

        answers: [
            "Tunnel Oxide Passivated Contact",
            "Thermal Oxide Power Connection",
            "Top Contact Network"
        ],

        correctAnswer: 0
    },

    {
        question: "Which parameters are critical during lamination?",

        answers: [
            "Vacuum pressure and temperature",
            "Logo colour",
            "Packing-label size"
        ],

        correctAnswer: 0
    },

    {
        question: "Which inspection detects micro-cracks?",

        answers: [
            "EL inspection",
            "Barcode scanning",
            "Frame measurement"
        ],

        correctAnswer: 0
    },

    {
        question: "Why is barcode traceability required?",

        answers: [
            "To track materials and process history",
            "To increase module wattage",
            "To reduce glass thickness"
        ],

        correctAnswer: 0
    },

    {
        question: "Which test verifies electrical insulation?",

        answers: [
            "Hi-Pot test",
            "Visual inspection",
            "Peel-strength test"
        ],

        correctAnswer: 0
    }
];


// =====================================================
// COURSE STATE
// =====================================================

let currentLesson = 0;

let selectedLanguage = "en";

const completedLessons = new Set(
    JSON.parse(
        localStorage.getItem("topconCompleted") || "[]"
    )
);


// =====================================================
// SAVE PROGRESS
// =====================================================

function saveProgress() {

    localStorage.setItem(
        "topconCompleted",
        JSON.stringify([...completedLessons])
    );
}


// =====================================================
// DISPLAY LESSON LIST
// =====================================================

function renderLessonList() {

    const lessonList =
        document.getElementById("lessonList");

    lessonList.innerHTML =
        lessons.map((lesson, index) => {

            const activeClass =
                index === currentLesson
                    ? "active"
                    : "";

            const completedClass =
                completedLessons.has(index)
                    ? "done"
                    : "";

            return `
                <button
                    class="${activeClass} ${completedClass}"
                    onclick="openLesson(${index})"
                >
                    <span>
                        ${index + 1}.
                        ${lesson.title[selectedLanguage]}
                    </span>
                </button>
            `;

        }).join("");


    document.getElementById(
        "completedCount"
    ).textContent =
        completedLessons.size;


    const progress =
        completedLessons.size /
        lessons.length *
        100;


    document.getElementById(
        "courseProgressBar"
    ).style.width =
        `${progress}%`;
}


// =====================================================
// OPEN LESSON
// =====================================================

function openLesson(index) {

    currentLesson = index;


    document.getElementById(
        "lessonView"
    ).classList.remove("hidden");


    document.getElementById(
        "quizView"
    ).classList.add("hidden");


    const lesson =
        lessons[index];


    document.getElementById(
        "lessonTitle"
    ).textContent =
        lesson.title[selectedLanguage];


    document.getElementById(
        "breadcrumb"
    ).textContent =
        `COURSE / LESSON ${index + 1}`;


    document.getElementById(
        "lessonIcon"
    ).textContent =
        lesson.icon;


    document.getElementById(
        "lessonContent"
    ).innerHTML =
        lesson.body[selectedLanguage] ||
        lesson.body.en;


    document.getElementById(
        "prevLesson"
    ).disabled =
        index === 0;


    document.getElementById(
        "nextLesson"
    ).textContent =
        index === lessons.length - 1
            ? "Take Assessment →"
            : "Next Lesson →";


    document.getElementById(
        "completeLesson"
    ).textContent =
        completedLessons.has(index)
            ? "Completed ✓"
            : "Mark Complete ✓";


    renderLessonList();
}


// =====================================================
// PREVIOUS LESSON
// =====================================================

document.getElementById(
    "prevLesson"
).addEventListener(
    "click",
    () => {

        openLesson(
            Math.max(
                0,
                currentLesson - 1
            )
        );
    }
);


// =====================================================
// NEXT LESSON
// =====================================================

document.getElementById(
    "nextLesson"
).addEventListener(
    "click",
    () => {

        if (
            currentLesson ===
            lessons.length - 1
        ) {

            showQuiz();

        } else {

            openLesson(
                currentLesson + 1
            );
        }
    }
);


// =====================================================
// COMPLETE LESSON
// =====================================================

document.getElementById(
    "completeLesson"
).addEventListener(
    "click",
    () => {

        completedLessons.add(
            currentLesson
        );

        saveProgress();

        openLesson(
            currentLesson
        );
    }
);


// =====================================================
// LANGUAGE CHANGE
// =====================================================

document.getElementById(
    "languageSelect"
).addEventListener(
    "change",
    event => {

        selectedLanguage =
            event.target.value;

        openLesson(
            currentLesson
        );
    }
);


// =====================================================
// LESSON PLAY BUTTON
// =====================================================

document.getElementById(
    "playButton"
).addEventListener(
    "click",
    () => {

        alert(
            "Add your training video or MP4 link here."
        );
    }
);


// =====================================================
// OPEN FINAL ASSESSMENT
// =====================================================

document.getElementById(
    "quizLink"
).addEventListener(
    "click",
    showQuiz
);


function showQuiz() {

    document.getElementById(
        "lessonView"
    ).classList.add("hidden");


    document.getElementById(
        "quizView"
    ).classList.remove("hidden");


    const quizForm =
        document.getElementById("quizForm");


    quizForm.innerHTML =
        quiz.map((question, questionIndex) => {

            const options =
                question.answers.map(
                    (answer, answerIndex) => {

                        return `
                            <label>

                                <input
                                    type="radio"
                                    name="question${questionIndex}"
                                    value="${answerIndex}"
                                >

                                ${answer}

                            </label>
                        `;

                    }
                ).join("");


            return `
                <div class="question">

                    <b>
                        ${questionIndex + 1}.
                        ${question.question}
                    </b>

                    ${options}

                </div>
            `;

        }).join("");
}


// =====================================================
// SUBMIT ASSESSMENT
// =====================================================

document.getElementById(
    "submitQuiz"
).addEventListener(
    "click",
    () => {

        let correctAnswers = 0;


        quiz.forEach(
            (question, questionIndex) => {

                const selectedAnswer =
                    document.querySelector(
                        `input[name="question${questionIndex}"]:checked`
                    );


                if (
                    selectedAnswer &&
                    Number(
                        selectedAnswer.value
                    ) ===
                    question.correctAnswer
                ) {

                    correctAnswers++;
                }
            }
        );


        const score =
            Math.round(
                correctAnswers /
                quiz.length *
                100
            );


        const passed =
            score >= 70;


        const certificateId =
            "EV-" +
            new Date().getFullYear() +
            "-" +
            Math.random()
                .toString(36)
                .slice(2, 8)
                .toUpperCase();


        const completionDate =
            new Date()
                .toLocaleDateString(
                    "en-IN"
                );


        localStorage.setItem(
            "topconResult",
            JSON.stringify({

                score: score,

                passed: passed,

                id: certificateId,

                date: completionDate

            })
        );


        const resultBox =
            document.getElementById(
                "quizResult"
            );


        if (passed) {

            lessons.forEach(
                (lesson, index) => {

                    completedLessons.add(index);
                }
            );

            saveProgress();

            renderLessonList();


            resultBox.innerHTML = `
                <div class="result pass">

                    <h2>
                        Congratulations!
                    </h2>

                    <p>
                        You passed the assessment
                        with a score of
                        <b>${score}%</b>.
                    </p>

                    <a href="certificate.html">
                        Download Certificate
                    </a>

                </div>
            `;

        } else {

            resultBox.innerHTML = `
                <div class="result fail">

                    <h2>
                        Please Try Again
                    </h2>

                    <p>
                        Your score is
                        <b>${score}%</b>.
                    </p>

                    <p>
                        Review the lessons and score
                        at least 70% to pass.
                    </p>

                </div>
            `;
        }
    }
);


// =====================================================
// INITIALIZE COURSE
// =====================================================

openLesson(0);


// Open assessment directly from dashboard.

if (
    window.location.hash ===
    "#assessment"
) {

    showQuiz();
}
