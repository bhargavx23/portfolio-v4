let openbtn = document.getElementById("hamburger");
let closebtn = document.getElementById("closebtn");
let navs = document.getElementById("navs");
let layer = document.getElementById("layer");
let clicks = document.getElementById("clicks");
let clicks1 = document.getElementById("clicks1");
let clicks2 = document.getElementById("clicks2");
let clicks3 = document.getElementById("clicks3");
let start = document.querySelector(".start");
let name = document.getElementById("timename");
let welcomesign = document.getElementById("welcomesign");

openbtn.onclick = function () {
  navs.classList.add("show");
  openbtn.style.display = "none";
};
closebtn.onclick = function () {
  navs.classList.remove("show");
  openbtn.style.display = "flex";
};
layer.onclick = function () {
  navs.classList.remove("show");
  openbtn.style.display = "flex";
};

clicks.onclick = () => {
  navs.classList.remove("show");
  openbtn.style.display = "flex";
};
clicks1.onclick = () => {
  navs.classList.remove("show");
  openbtn.style.display = "flex";
};
clicks2.onclick = () => {
  navs.classList.remove("show");
  openbtn.style.display = "flex";
};
clicks3.onclick = () => {
  navs.classList.remove("show");
  openbtn.style.display = "flex";
};

setTimeout(() => {
  window.location = "#cont";
}, 3000);

setTimeout(() => {
  start.style.display = "none";
}, 4000);
