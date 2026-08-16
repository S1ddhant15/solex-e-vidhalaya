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
  box.innerHTML=courses.filter(course=>course[0].toLowerCase().includes(query)&&(selectedCategory==="All"||course[1]===selectedCategory)).map(course=>`<article class="course"><div class="course-icon">${course[3]}</div><div class="course-info"><small>${course[1].toUpperCase()}</small><h4>${course[0]}</h4><p>${course[2]>0?course[2]+"% completed":"Not started"}</p><div class="bar"><i style="width:${course[2]}%"></i></div><button onclick="openCourse('${course[0].replaceAll("'","")}')">${course[2]>0?"Resume":"Start"} Course</button></div></article>`).join("")||"<p>No courses found.</p>";
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

function updateClock(){
  document.querySelector("#liveClock").textContent=new Intl.DateTimeFormat("en-IN",{weekday:"long",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date());
}
updateClock();setInterval(updateClock,1000);

document.querySelectorAll(".kpis b[data-value]").forEach(element=>{
  const target=Number(element.dataset.value),suffix=element.dataset.suffix;
  let current=0;const step=target/35;
  const timer=setInterval(()=>{current=Math.min(target,current+step);element.textContent=(Number.isInteger(target)?Math.round(current):current.toFixed(1))+suffix;if(current>=target)clearInterval(timer)},25);
});

function openCourse(title){
  const toast=document.querySelector("#toast");toast.textContent=title+" opened";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2200);
}
