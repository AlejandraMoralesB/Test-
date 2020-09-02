/** @format */
//Navbar
let mainNav = document.getElementById("main-nav");
let navbarToggle = document.getElementById("navbar-toggle");

navbarToggle.addEventListener("click", function () {
  if (this.classList.contains("active")) {
    mainNav.style.display = "none";
    this.classList.remove("active");
  } else {
    mainNav.style.display = "flex";
    this.classList.add("active");
  }
});

// Btn empleados
const logBtn = document.getElementById("log");
logBtn.addEventListener("click", fetchData);

async function fetchData() {
  const response = await fetch("https://randomuser.me/api/?results=20");
  const data = await response.json();

  let html = "";
  for (x in data.results) {
    html += `
    <div class="cards__item">
    <div class="card">
     <img  class="card__image" src="${data.results[x].picture.large}" alt="Avatar" />
     </div>
     <div class="card__content">
        <p class="card__text"> Nombre: ${data.results[x].name.title} ${data.results[x].name.first}  ${data.results[x].name.last}</p>
        <p class="card__text"> Telefono: ${data.results[x].phone}</p>
        <p class="card__text" > Email: ${data.results[x].email}</p>
     </div>
    </div>


`;
  }
  document.getElementById("result").innerHTML = html;
}
