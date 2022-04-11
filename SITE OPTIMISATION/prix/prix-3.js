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

function initPayPalButton() {
    paypal.Buttons({
      style: {
        shape: 'pill',
        color: 'blue',
        layout: 'vertical',
        label: 'paypal',
        
      },

      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{"amount":{"currency_code":"EUR","value":250}}]
        });
      },

      onApprove: function(data, actions) {
        return actions.order.capture().then(function(orderData) {
          
          // Full available details
          console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

          // Show a success message within this page, e.g.
          const element = document.getElementById('paypal-button-container');
          element.innerHTML = '';
          element.innerHTML = '<h3>Thank you for your payment!</h3>';

          // Or go to another URL:  actions.redirect('thank_you.html');
          
        });
      },

      onError: function(err) {
        console.log(err);
      }
    }).render('#paypal-button-container');
  }
  initPayPalButton();

  