const dockIcons = document.querySelectorAll(".dock-icon");
const bootScreen = document.getElementById("boot-screen");
const systemTime = document.getElementById("system-time");
const clockIcon = document.getElementById("clock-icon");
const notesIcon = document.querySelector(".dock-icon.notes");
const notesWindow = document.getElementById("notes-window");


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

function updateTime() {
    const now = new Date();
    systemTime.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
    });
}
updateTime();
setInterval(updateTime, 1000);

systemTime.addEventListener("click", function () {
    openClock();
    bringToFront(clockWindow);
});

clockIcon.addEventListener("click", function () {
    openClock();
    bringToFront(clockWindow);
});

const windows = document.querySelectorAll(".app-window");

windows.forEach(function (windowElement) {
    const titleBar = windowElement.querySelector(".window-title");

    if (!titleBar) {
        return;
    }

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titleBar.addEventListener("mousedown", function (event) {
        isDragging = true;

        offsetX = event.clientX - windowElement.offsetLeft;
        offsetY = event.clientY - windowElement.offsetTop;
    });

    document.addEventListener("mousemove", function (event) {
        if (!isDragging) {
            return;
        }

        windowElement.style.left = event.clientX - offsetX + "px";
        windowElement.style.top = event.clientY - offsetY + "px";
    });

    document.addEventListener("mouseup", function () {
        isDragging = false;
    });
});

windows.forEach(function (windowElement) {
    const closeButton = windowElement.querySelector(".window-close");

    if (!closeButton) {
        return;
    }

    closeButton.addEventListener("click", function () {
        windowElement.classList.remove("open");

        setTimeout(function () {
            windowElement.style.display = "none";
        }, 200);
    });
});
notesIcon.addEventListener("click", function () {
    notesWindow.style.display = "flex";
    bringToFront(notesWindow);
    notesWindow.style.left = (window.innerWidth / 2 - 250) + "px";
    notesWindow.style.top = (window.innerHeight / 2 - 175) + "px";
    setTimeout(function () {
        notesWindow.classList.add("open");
    }, 10);
});

let highestWindow = 10;

function bringToFront(windowElement) {
    highestWindow++;
    windowElement.style.zIndex = highestWindow;
}

windows.forEach(function (windowElement) {
    windowElement.addEventListener("mousedown", function () {
        bringToFront(windowElement);
    });
});



