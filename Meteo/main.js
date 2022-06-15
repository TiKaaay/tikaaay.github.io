const CLEFAPI = 'addf6b8a9674add9270f710c37f66aed';
let resultatsAPI;

const Info = document.querySelector("h3");
const GrosSoleil = document.querySelector(".gros-soleil");
const GrosTemp = document.querySelector("h1");
const localisation = document.querySelector("h2");
const Listes = document.querySelectorAll(".listes");
const HeureTemp = document.querySelectorAll(".heure-temp");
const LesTemp = document.querySelectorAll(".les-temps");
const Humidité = document.querySelectorAll(".humidité");
const UV = document.querySelectorAll(".uv");
const LesRenssenties = document.querySelectorAll(".ressentie");
const ImagesTemp = document.querySelectorAll(".images-temp");
const chargement = document.querySelector(".chargement");
const IconJours= document.querySelectorAll(".partie-ciel-jours");

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppelAPI(long,lat);
        // console.log(position);
    }, () => {
        alert("Vous avez Refuser la Géocalisation, par conséquent l'application ne peux pas fonctionner. Veuiller recharger la page et accepter la Localisation.")
    })
}
function AppelAPI(long, lat) {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`)
            .then((reponse) => {
            return reponse.json();
        })
        .then((data) => {
            console.log(data);
            resultatsAPI = data;

            // Affichage des informations de la Partie Haute de L'écran---
            let resultatAvis = resultatsAPI.current.weather[0].description;
            resultatAvis = resultatAvis.charAt(0).toUpperCase() + resultatAvis.slice(1);
            Info.innerText = resultatAvis;

            
            GrosTemp.innerText = `${Math.trunc(resultatsAPI.current.temp)} °C`
            localisation.innerText = resultatsAPI.timezone;
            // console.log(LesTemp);

            GrosSoleil.src = `ressources/icone-temp/${resultatsAPI.current.weather[0].icon}.svg`

            // ------------------------------------------------------------

            // Affichage de L'heure de toute les températures--------------



            let heureActuelle = new Date().getHours();
            for(let i=0; i<HeureTemp.length; i++){
                let heureIccr = heureActuelle + i;
                HeureTemp[i].innerText = `${heureIccr} °C` ;
                if(heureIccr > 24){
                    HeureTemp[i].innerText = `${heureIccr - 24} h`;
                }else if(heureIccr === 24){
                    HeureTemp[i].innerText = "00h";
                }else{
                    HeureTemp[i].innerText = `${heureIccr} h`;
                }
            }
            // ------------------------------------------------------------

            // Affichage de la température de toute les heures ------------

            for(let j = 0; j < LesTemp.length; j++) {
                LesTemp[j].innerText = `${Math.trunc(resultatsAPI.hourly[j + 1].temp)}°C`
            }

            // ---------------------------------------------------------------------

            // Affichage de L'humidité ------------------------------------------------

            for(let h = 0; h < Humidité.length; h++) {
               Humidité[h].innerText = `${Math.trunc(resultatsAPI.hourly[h + 1].humidity)}%`
            }

            // -----------------------------------------------------------

            // Affichage de toute les icones ------------------------------------------

                    for(let x = 0; x < ImagesTemp.length; x++){
                        // console.log(resultatsAPI.hourly[x+1].weather[0].icon);
                    ImagesTemp[x].src = `ressources/icone-temp/${resultatsAPI.hourly[x+1].weather[0].icon}.svg`
                }

                    for(let x = 0; x < IconJours.length; x++){
                        // console.log(resultatsAPI.hourly[x+1].weather[0].icon);
                    IconJours[x].src = `ressources/icone-temp/${resultatsAPI.daily[x+1].weather[0].icon}.svg`
                    console.log(IconJours);
                }


                // -----------------------------------------------------------

            // Affichage UV ------------------------------------------------

            for(let u = 0; u < UV.length; u++) {
                UV[u].innerText = `${Math.trunc(resultatsAPI.hourly[u + 1].uvi)}`
             }
 
             // -----------------------------------------------------------

             
            // Affichage Ressentie ------------------------------------------------

            for(let r = 0; r < LesRenssenties.length; r++) {
                LesRenssenties[r].innerText = `${Math.trunc(resultatsAPI.hourly[r + 1].feels_like)}°C`
             }
 
             // -----------------------------------------------------------

                // Jours -----------------------------------------------------
                const jourSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
                let ajd = new Date();
                
                let option = {weekday: 'long'};
                let jourActuel = ajd.toLocaleDateString('fr-FR', option);
                jourActuel = jourActuel.charAt(0).toLocaleUpperCase() + jourActuel.slice(1);
                // console.log(jourActuel);
                let tabJourEnOrdre = jourSemaine.slice(jourSemaine.indexOf(jourActuel)).concat(jourSemaine.slice(0,jourSemaine.indexOf(jourActuel)));
                // console.log(jourSemaine.slice(jourSemaine.indexOf(jourActuel)));
                // console.log(jourSemaine.concat(jourSemaine.slice(0,jourSemaine.indexOf(jourActuel))));
                // console.log(tabJourEnOrdre);

            // eventlistener click -----------------------

            const btnAjd = document.getElementById("le-jour-J");
            const btnJours = document.getElementById("les-jours-de-da-semaine");
            const containerListe = document.querySelectorAll(".container-listes");
            const testContainer = document.querySelector(".test-container");
            // console.log(testContainer);

             btnAjd.addEventListener('click', () => {
                  containerListe1.classList.add("display-block");
                  containerListe2.classList.add("display-block");
                  testContainer.classList.remove("display-block");
                })
              
           btnJours.addEventListener('click', () => {
            testContainer.classList.add("display-block");
            containerListe1.classList.remove("display-block");
            containerListe2.classList.remove("display-block");
            containerListe1.classList.add("display-none");
            containerListe2.classList.add("display-none");
             })


                // les const + les for ----------------------------------
                const partieJours = document.querySelectorAll(".listes-jours");
                const partieMin= document.querySelectorAll(".jours-temp-min");
                const partieMax = document.querySelectorAll(".jours-temp-max");
                // console.log(partieJours, partieMin, partieMax);

                for(let k=0; k < tabJourEnOrdre.length; k++ ){
                    partieJours[k].innerText=tabJourEnOrdre[k].slice(0,3);
                    }

                for(let r = 0; r < partieMin.length; r++) {
                    partieMin[r].innerText = `${Math.trunc(resultatsAPI.daily[r + 1].temp.min)}°C`
                 }
                for(let r = 0; r < partieMax.length; r++) {
                    partieMax[r].innerText = `${Math.trunc(resultatsAPI.daily[r + 1].temp.max)}°C`
                 }


                // ------------------------------------------------------------
                // SI on est le jour alors Afficher ce fond d'écran, et mettre ce fond de catégorie
                const fondApp = document.querySelector("body");
                const containerParties = document.querySelector(".container-parties");
                const containerListe1 = containerParties.childNodes[1];
                const containerListe2 = containerParties.childNodes[3];
                // console.log(containerListe1);
                // console.log(containerListe2);


                if (heureActuelle >= 6 && heureActuelle <20) {
                    fondApp.style.backgroundImage = `url(images/journée.jpg)`;
                    containerListe1.classList.remove("nuit-jours");
                    containerListe1.classList.add("jours-nuit");
                    containerListe2.classList.remove("jours-nuit");
                    containerListe2.classList.add("nuit-jours");
                }
                else{
                    fondApp.style.backgroundImage = `url(images/soirée.jpg)`;
                    containerListe1.classList.remove("jours-nuit");
                    containerListe1.classList.add("nuit-jours");
                    containerListe2.classList.remove("nuit-jours");
                    containerListe2.classList.add("jours-nuit");
                }
                chargement.classList.add("stop-chargement");
        })
    }