// Ouvrir le menu en responsif
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

      if(navToggle){
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu")
        })
      }

// Fermer le menu
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    // Quand on clique sur chaque link, on cache le menu
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))