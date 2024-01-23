document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    // Define your variables
    var startFade = false;
    var profileFadeA = true;
    var profileFadeB = true;
    var greetingsFontSize = 15;
    var currentTime = "";

    // Define your functions
    function handleScroll() {
        var windowHeight = window.innerHeight;
        var scrollPosition = window.scrollY;
        var startRef = document.getElementById("greetings");
        var startOffset = startRef.offsetTop;
        var startScrollPercentage = (scrollPosition - startOffset + windowHeight) / windowHeight;
        startFade = startScrollPercentage > 0 && startScrollPercentage < 1;
        greetingsFontSize = 15 - startScrollPercentage * 5;
        document.getElementById("greetings").style.fontSize = greetingsFontSize + "rem";
        if (!startFade) {
            document.getElementById("sectionA").classList.add("fade-out");
        }
        if (startFade) {
            document.getElementById("sectionA").classList.remove("fade-out");
        }
        console.log(greetingsFontSize)
        console.log(startFade)
    }

    function updateClock() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var timeString =
            padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds);
        currentTime = timeString;
        document.getElementById("currentTime").innerText = currentTime;
        setTimeout(updateClock, 1000);
    }

    function padZero(value) {
        return value.toString().padStart(2, "0");
    }

    // Call your functions
    window.addEventListener("scroll", handleScroll);
    updateClock();
});
