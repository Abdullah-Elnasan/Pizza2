
// var x = document.getElementById("navbarNav");
// function myFunction() {
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

// Scrollbsr navbar

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('scroll-on')
  } else {
    nav.classList.remove("scroll-on")
  }
}

// nav hide

let navBar = document.querySelectorAll(".nav-link");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
        x.style.display = "none";
    })
})

// // Select All buttuns
// const allButtons = document.querySelectorAll(".carousel-indicators button");

// // Select All section
// const allLinks = document.querySelectorAll(".carousel-inner .carousel-item");

// function handleTes(elements) {
//   elements.forEach((ele) => {
//     ele.addEventListener("click", (e) => {
//       document.querySelector(e.target.dataset.section)
//     });
//   });
// }
// handleTes(allButtons);
// handleTes(allLinks);