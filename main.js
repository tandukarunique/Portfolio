//================Toogle icon navbar =============>
let menuIcon = document.querySelector("menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.oneclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//================Scroll Section icon navbar =============>
let Sections = document.querySelectorAll("Section");
let navLinks = document.querySelectorAll("headernav a");

window.onscroll = () => {
  Sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if ((top >= offset) & (top < offset + height)) {
      navLinks.forEach.apply((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a [href *=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
//================Sticky navbar =============>
let header = document.querySelector("header");
header.classList.toogle("sticky", window.scrollY > 100);

//================Remove toogle icon and navbar =============>

menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");
