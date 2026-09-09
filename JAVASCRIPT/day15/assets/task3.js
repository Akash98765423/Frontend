const details = document.getElementById("details");
const detailsBtn = document.getElementById("detailsBtn");

detailsBtn.addEventListener("click", function () {

    details.classList.toggle("show");

    if (details.classList.contains("show")) {
        detailsBtn.textContent = "Hide Details";
    } else {
        detailsBtn.textContent = "Show Details";
    }

});