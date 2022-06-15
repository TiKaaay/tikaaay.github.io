const CLEFAPI = 'addf6b8a9674add9270f710c37f66aed';
let resultatsAPI;

const Info = document.querySelector("h3");
const GrosSoleil = document.querySelector(".gros-soleil");
const GrosTemp = document.querySelector("h1");
const localisation = document.querySelector("h2");
const Listes = document.querySelectorAll(".listes");
const HeureTemp = document.querySelectorAll(".heure-temp");
const LesTemp = document.querySelectorAll(".les-temps");
const ImagesTemp = document.querySelectorAll(".images-temp");
const chargement = document.querySelector(".chargement");

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

            Info.innerText = resultatsAPI.current.weather[0].description;
            GrosTemp.innerText = `${Math.trunc(resultatsAPI.current.temp)} °`
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
                LesTemp[j].innerText = `${Math.trunc(resultatsAPI.hourly[j + 1].temp)}°`
            }

                    for(let x = 0; x < ImagesTemp.length; x++){
                        console.log(resultatsAPI.hourly[x+1].weather[0].icon);
                    ImagesTemp[x].src = `ressources/icone-temp/${resultatsAPI.hourly[x+1].weather[0].icon}.svg`
                }
                // -----------------------------------------------------------

                // SI on est le jour alors Afficher ce fond d'écran, et mettre ce fond de catégorie
                const fondApp = document.querySelector("main");
                const constainerListe = document.querySelector(".container-parties");
                const containerListe1 = constainerListe.childNodes[1];
                const containerListe2 = constainerListe.childNodes[3];
                // console.log(containerListe1);
                // console.log(containerListe2);


                if (heureActuelle >= 6 && heureActuelle <=21) {
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