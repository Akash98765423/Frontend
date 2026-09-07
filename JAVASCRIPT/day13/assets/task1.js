
let heading = document.getElementById("heading");
heading.textContent = "Welcome to JavaScript DOM";
      
let paragraphs = document.querySelectorAll(".para");

paragraphs.forEach(function(paragraph, index) {
    paragraph.textContent = "This is the updated paragraph " + (index + 1);
});