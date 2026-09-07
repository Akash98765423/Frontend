let heading = document.getElementById("heading");
let button = document.getElementById("Button");

button.addEventListener("click", function() {
    heading.textContent = "Button Clicked!";
    heading.style.color = "blue";
    heading.classList.add("highlight");
});