const session=JSON.parse(sessionStorage.getItem("evidhayalaySession")||"null");
if(!session)window.location.replace("login.html");

const courses=[
  ["TOPCon Module Manufacturing","Production",68,"☀"],
  ["Pre-Lam & Post-Lam Defect Control","Quality",42,"◉"],
  ["Machine Alarm Troubleshooting with SAMA","Maintenance",20,"⚙"],
  ["MES & Power BI Analytics","Digital",0,"▥"],
  ["EHS, LOTO & Workplace Safety","Safety",0,"♢"],
  ["RCA, CAPA & Problem Solving","Quality",0,"◎"]
];
const box=document.querySelector("#courses");
const search=document.querySelector("#search");
const category=document.querySelector("#category");
function render(){
  const query=search.value.toLowerCase();
  const selectedCategory=category.value;
  box.innerHTML=courses.filter(course=>course[0].toLowerCase().includes(query)&&(selectedCategory==="All"||course[1]===selectedCategory)).map(course=>`<article class="course"><div class="course-icon">${course[3]}</div><div class="course-info"><small>${course[1].toUpperCase()}</small><h4>${course[0]}</h4><p>${course[2]>0?course[2]+"% completed":"Not started"}</p><div class="bar"><i style="width:${course[2]}%"></i></div><button onclick="alert('Opening course')">${course[2]>0?"Resume":"Start"} Course</button></div></article>`).join("")||"<p>No courses found.</p>";
}
render();
search.addEventListener("input",render);
category.addEventListener("change",render);
document.querySelectorAll("nav button").forEach(button=>button.addEventListener("click",()=>{
  document.querySelectorAll("nav button").forEach(item=>item.classList.remove("active"));
  button.classList.add("active");
  document.querySelector("#sectionTitle").textContent=button.innerText.replace("2","").trim();
}));
document.querySelector("#mobileMenu").addEventListener("click",()=>document.querySelector(".sidebar").classList.toggle("open"));
if(session)document.querySelector("#departmentName").textContent=session.department+" Department";
function logout(){sessionStorage.removeItem("evidhayalaySession");window.location.href="login.html";}
