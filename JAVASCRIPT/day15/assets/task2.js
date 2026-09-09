const box = document.getElementById("box");
const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function () {
    box.classList.toggle("green");
    box.classList.toggle("red");
});