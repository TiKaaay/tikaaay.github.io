const nav = document.getElementById("container-nav");
const contact = document.getElementById("container-contact");

window.addEventListener("load", () => {
    const TimeLine =gsap.timeline({paused: true});
    TimeLine.from(contact, 1, {opacity: 0} )
    TimeLine.staggerFrom(nav, 0.5, {top: -70}, "-=1")


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