window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;

    document.querySelectorAll(".parallax").forEach((section, index) => {
        let speed = 0.3 + index * 0.05; 
        section.style.backgroundPositionY = -(scrolled * speed) + "px";
    });
});