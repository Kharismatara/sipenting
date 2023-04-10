//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu di click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click diluar sidebar untuk nav
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // menghentikan perilaku default form
  alert("Data sudah dikirim!");
  // menampilkan alert setelah form dikirim
  form.reset();
});
