var toggleButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Add event listener to toggle visibility of the Skills section
toggleButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
