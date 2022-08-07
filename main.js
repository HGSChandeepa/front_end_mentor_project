let hamburger = document.getElementById("hamburger");
let navBarUL = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBarUL.classList.toggle("active");
});

document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBarUL.classList.remove("active");
  })
);
