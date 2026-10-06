const notesText = document.getElementById("notes-text");
const savedNotes = localStorage.getItem("ctrl-notes");

if (savedNotes) {
    notesText.value = savedNotes;
}

notesText.addEventListener("input", function () {
    localStorage.setItem("ctrl-notes", notesText.value);
});

notesIcon.addEventListener("click", function () {
    notesIcon.classList.add("active");

    notesWindow.style.display = "flex";

    notesWindow.style.left = (window.innerWidth / 2 - 250) + "px";
    notesWindow.style.top = (window.innerHeight / 2 - 175) + "px";

    setTimeout(function () {
        notesWindow.classList.add("open");
    }, 10);
});
