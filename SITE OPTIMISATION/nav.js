const nav = document.getElementById("container-nav");
const contact = document.getElementById("container-contact");
const prix = document.getElementById("prix");

window.addEventListener("load", () => {

    const loaderRoue = document.querySelector(".loader-roue");
    loaderRoue.classList.add("fondu-out");

    const TimeLine =gsap.timeline({paused: true});
    TimeLine.from(contact, 0.5, {opacity: 0} )
    TimeLine.staggerFrom(prix, 0.5, {opacity: 0} )
    TimeLine.staggerFrom(nav, 0.5, {top: -70},0.9, "-=1")


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