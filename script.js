var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
btn[0].click = function () {
  slide.style.transform = "translateX(0px)";
};
btn[1].click = function () {
  slide.style.transform = "translateX(-800px)";
};
