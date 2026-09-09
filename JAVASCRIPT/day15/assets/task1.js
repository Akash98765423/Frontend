const content = document.getElementById("content");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
    content.classList.toggle("show");
});