// DEMONSTRATION USERS ONLY. GitHub Pages exposes this file publicly.
const USERS = [
  { id: "admin", password: "Solex@123", department: "Management", name: "Administrator" },
  { id: "production", password: "Prod@123", department: "Production", name: "Production User" },
  { id: "quality", password: "Quality@123", department: "Quality", name: "Quality User" },
  { id: "maintenance", password: "Maint@123", department: "Maintenance", name: "Maintenance User" }
];
document.querySelector("#loginForm").addEventListener("submit", function(event){
  event.preventDefault();
  const id=document.querySelector("#userId").value.trim();
  const password=document.querySelector("#password").value;
  const department=document.querySelector("#loginDepartment").value;
  const user=USERS.find(item=>item.id===id&&item.password===password&&item.department===department);
  if(!user){document.querySelector("#loginError").textContent="Invalid Employee ID, password or department.";return;}
  sessionStorage.setItem("evidhayalaySession",JSON.stringify({id:user.id,name:user.name,department:user.department}));
  window.location.href="index.html";
});
