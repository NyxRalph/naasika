window.addEventListener("scroll", function () {
    let scrolled = window.scrollY;

    document.querySelectorAll(".parallax").forEach((section, index) => {
        // console.log(index)
        let speed = 0.05 + index * 0.1;
        section.style.backgroundPositionY = -(scrolled * speed) + "px";
    });
});

// document.addEventListener('scroll', () => {
//     const sections = document.querySelectorAll('.parallax');

//     sections.forEach(section => {
//       const rect = section.getBoundingClientRect();
//       const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

//       if (isInView) {
//         const scrollSpeed = 0.15;
//         const offset = window.scrollY * scrollSpeed;
//         section.style.backgroundPositionY = -`${offset}px`;
//       }
//     });
//   });

