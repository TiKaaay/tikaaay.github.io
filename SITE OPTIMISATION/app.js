const nav = document.getElementById("container-nav");
const vraiNav = document.querySelector("nav")
const header = document.querySelector("header");
const filante = document.getElementById("filante")
const returnUp = document.getElementById("return-up")

window.addEventListener("load", () => {
    const TimeLine =gsap.timeline({paused: true});
    TimeLine.from(header, 1, {opacity: 0} )
    TimeLine.from(filante, 1, {left: -600}, 0.2)
    TimeLine.staggerFrom(nav, 1, {top: -70})
    TimeLine.staggerFrom(returnUp, 1, {opacity: 0}, 0.3)


    TimeLine.play();
})

// window.addEventListener("scroll", () => {
//     if (window.scrollY > 30) {
//         nav.classList.add("anim-nav");
//         vraiNav.style.position ="fixed";
        
//     } else {
//         nav.classList.remove("anim-nav");
//         vraiNav.style.position ="initial";
//     }
// })