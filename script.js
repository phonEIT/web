// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
//selecter
const btn = document.querySelectorAll("button");
// console.log(btn);
btn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    {
      var btnItem = event.target;
      var section = btnItem.parentElement;
      var sectionImg = section.querySelectorAll("img").src;

      console.log(btnItem);
      console.log(section);
      console.log(sectionImg);
    }
  });
});
