const dockIcons = document.querySelectorAll(".dock-icon");
const bootScreen = document.getElementById("boot-screen");

dockIcons.forEach(function (icon) {
icon.addEventListener("mouseenter", function () {
icon.style.transform = "translateY(-8px) scale(1.15)";
});

icon.addEventListener("mouseleave", function () {
    icon.style.transform = "translateY(0) scale(1)";
});

});
window.addEventListener("load", function () {
    
    setTimeout(function () {
        bootScreen.style.opacity = "0";

        setTimeout(function () {
            bootScreen.style.display = "none";
        }, 700);
    }, 1800);
});
