const clockDisplay = document.getElementById("clock-display");
const clockDate = document.getElementById("clock-date");
const clockWindow = document.getElementById("clock-window");
const clockTitle = document.getElementById("clock-title");



function openClock() {
    clockWindow.style.display = "flex";

    clockWindow.style.left = (window.innerWidth / 2 - 160) + "px";
    clockWindow.style.top = (window.innerHeight / 2 - 110) + "px";

    setTimeout(function () {
        clockWindow.classList.add("open");
    }, 10);
}

function closeClock() {


    setTimeout(function () {
        clockWindow.style.display = "none";
        clockIcon.classList.remove("active");
    }, 200);
}

function updateClockApp() {
    const now = new Date();

    clockDisplay.textContent = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    });

    clockDate.textContent = now.toLocaleDateString([], {
        weekday: "long",
        month: "long",
        day: "numeric"
    });
}


updateClockApp();
setInterval(updateClockApp, 1000);
