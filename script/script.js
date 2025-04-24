const toggle = document.getElementsByClassName("menu-toggle")[0];
const links = document.getElementById("links");
toggle.addEventListener("click", (e) => {
  links.classList.toggle("active");
});
