const nav = document.getElementById("container-nav");
const vraiNav = document.querySelector("nav");
const header = document.querySelector("header");
const filante = document.getElementById("filante");
const returnUp = document.getElementById("return-up");

window.addEventListener("load", () => {
    const TimeLine =gsap.timeline({paused: true});
    TimeLine.from(header, 1, {opacity: 0} )
    TimeLine.from(filante, 1, {left: -600}, 0.7, "-=1")
    TimeLine.staggerFrom(nav, 1, {top: -70}, "-=1")
    TimeLine.staggerFrom(returnUp, 1, {opacity: 0}, 0.3, "-=1")


    TimeLine.play();
})

const media800 = window.matchMedia("(max-width: 800px)");
const boutonLien = document.querySelector("#bouton-lien");
const MenuHide = document.querySelector("#menu-hide");

    boutonLien.addEventListener("click", () => {
    MenuHide.classList.toggle("display-toggle");

    MenuHide.addEventListener("click", () => {
    MenuHide.classList.remove("display-toggle");
    })

    })

    media800.addEventListener("change", () => {
        console.log(media800.matches);
        
        if(media800.matches === false){

           MenuHide.classList.remove("display-toggle");
           
            }
        })




// nav.addEventListener("click", () => {
//     MenuHide.classList.remove("display-toggle");
// }
