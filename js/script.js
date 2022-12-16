gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(SplitText);

//lecture de la video
// document.querySelector('.video_intro').playbackRate = .75;

// MENU RESPONSIVE
let navigation = document.querySelector(".navigation");
let autres_titres = document.querySelector(".autres_titres");
let menu_hamburger = document.querySelector(".hamburger");
let logo = document.querySelector(".titre");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");


menu_hamburger.addEventListener("click", mobileMenu);

// certainement pas la maniere la plus optimale de faire un menu mais bon 
function mobileMenu() {
  if (autres_titres.classList.contains("autres_titres_mobile")) {
    autres_titres.classList.remove("autres_titres_mobile");
    menu_hamburger.style.opacity = "1";
    navigation.classList.remove("navigation_ouvert");
    logo.style.display = "block";
    menu_hamburger.classList.remove("hamburger_ouvert");
    bar1.classList.remove("bar_croix_rotate");
    bar2.style.opacity = "1";
    bar3.classList.remove("bar_croix__rotate");

  } else {
    navigation.classList.add("navigation_ouvert");
    autres_titres.classList.add("autres_titres_mobile");
    menu_hamburger.classList.add("hamburger_ouvert");
    logo.style.display = "none";
    bar1.classList.add("bar_croix_rotate");
    bar2.style.opacity = "0";
    bar3.classList.add("bar_croix__rotate");
  }
}

// POUR FERMER LE MENU
let links_nav = document.querySelectorAll(".nav-item");
links_nav.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  autres_titres.classList.remove("autres_titres_mobile");
  navigation.classList.remove("navigation_ouvert");
  bar1.classList.remove("bar_croix_rotate");
  bar2.style.opacity = "1";
  bar3.classList.remove("bar_croix__rotate");
}

// Première section
// APPARITION DES TITRES ET NAVIGATION

// gsap.from(".h1_introduction", {
//   opacity: 0,
//   x: 400,
//   duration: 2,
//   ease: "power2"
// });

gsap.from(".h2_introduction", {
  opacity: 0,
  x: 400,
  duration: 2.5,
  ease: "power2"
});

gsap.from(".video_intro", {
  opacity: 0,
  duration: 1,
  ease: "power2"
});

gsap.from(".navigation", {
  opacity: 0,
  duration: 2
});

gsap.from(".roadtrip_description", {
  opacity: 0,
  duration: 2
});

let titre_timeline = gsap.timeline(),
  mySplitText = new SplitText(".h1_introduction", {
    type: "chars"
  }),
  chars = mySplitText.chars; //an array of all the divs that wrap each character

gsap.set(".h1_introduction", {
  perspective: 400
});

titre_timeline.from(chars, {
  duration: 2,
  opacity: 0,
  ease: "back",
  stagger: 0.4,
  delay: 0.8,
});

// let titre_timeline2 = gsap.timeline(),
//   mySplitText2 = new SplitText(".h2_introduction", { type: "words, chars" }),
//   chars2 = mySplitText2.chars; //an array of all the divs that wrap each character


// titre_timeline2.from(chars2, {
//   duration: 10,
//   opacity: 0,
//   ease: "back",
//   stagger: 0.4, 
//   delay: 1
// });




// Deuxième section

// SCROLL HORIZONTAL DES PERSONNES 
// FOR EACH SUR CHAQUE CARTE DE PERSONNE 
// passage au scroll horizontal pour les autres sections (quand on est pas dans la section horizontale)
let equipe_div = document.querySelectorAll(".equipe_div");

equipe_div.forEach(section => {

  if (section.classList.contains('horizontal')) {

    const conteneur_cartes = section.querySelector('.section_cartes')
    const personne_carte = section.querySelector('.section_carte')

    gsap.to(conteneur_cartes, {
      x: () => {
        return -((conteneur_cartes.scrollWidth - window.innerWidth + window.innerWidth * 0.05) + (window.innerWidth / 2 - personne_carte.offsetWidth / 2))
      },
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: () => "center center",
        end: () => "+=" + conteneur_cartes.scrollWidth,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

  } else {
    ScrollTrigger.create({
      // markers: true,
      trigger: section,
      start: () => "top top",
      pin: true,
      anticipatePin: 1,
    });
  }
});


// Troisième section
// partie avec drawsvg
var timeline_map = gsap.timeline({
  repeat: 1,
});

let trajet = document.querySelector(".trajet");
let objectifs_div = document.querySelector(".objectifs_div");


timeline_map.from(trajet, {
  scrollTrigger: {
    trigger: trajet,
    start: 'center 60%',
    //  end:'top trajet.scrollWidth',
    end: "+=3000",
    // start: () => "top center",
    // end: () => "+=" + trajet.scrollWidth,
    scrub: 1,
    markers: true,
    pin: '.objectifs_div',
    anticipatePin: true,
  },
  ease: "none",
  drawSVG: "0 0"
});


timeline_map.from(".map_ottawa", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_ottawa",
    start: '+=100',
    end: "+=150",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});

timeline_map.from(".date_ottawa", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_ottawa",
    start: '+=100',
    end: "+=150",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});



timeline_map.from(".map_montreal", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_montreal",
    start: '+=349',
    end: "+=350",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});

timeline_map.from(".date_montreal", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_montreal",
    start: '+=349',
    end: "+=350",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});

timeline_map.from(".date_montreal2", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_montreal",
    start: '+=1000',
    end: "+=1020",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});

timeline_map.from(".map_quebec", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_quebec",
    start: '+=850',
    end: "+=852",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});

timeline_map.from(".date_quebec", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".map_quebec",
    start: '+=850',
    end: "+=870",
    scrub: 1,
    markers: true,
  },
  ease: "none",
});


// Quatrième section 
// juste une apparition de photos 
let activites = document.querySelectorAll(".activite_carte");

activites.forEach((element) => {
  let photo = element.querySelectorAll(".activite_photo");
  let description = element.querySelectorAll(".activite_description");
  let sous_description = element.querySelectorAll(".activite_sous_description");

  gsap.set(photo, {
    scale: 0
  });

  gsap.to(photo, {
    duration: 1.2,
    autoAlpha: 1,
    scale: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: photo,
      start: "top-=100 bottom",
      end: "bottom top+=100",
      toggleActions: "play resume none reverse"
    }
  });

  gsap.set(description, {
    scale: 0,
    opacity: 0,

  });

  gsap.to(description, {
    duration: 1.5,
    autoAlpha: 1,
    scale: 1,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: photo,
      start: "top bottom-=100",
      end: "bottom top+=100",
      toggleActions: "play resume none reverse"
    }
  });

  gsap.set(sous_description, {
    scale: 0,
    opacity: 0,

  });

  gsap.to(sous_description, {
    duration: 1.5,
    autoAlpha: 1,
    scale: 1,
    opacity: 1,
    delay: .4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: photo,
      start: "top bottom-=100",
      end: "bottom top+=100",
      toggleActions: "play resume none reverse"
    }
  });
})

// Cinquième section
// opacite et apparition des etoiles a la suite
let avis_perso = document.querySelectorAll(".avis_column");
// let avis_stars = document.querySelectorAll(".avis_starf");

avis_perso.forEach((element) => {
  let avis_nom_ville = element.querySelectorAll(".avis_nom_ville");
  let avis_ville = element.querySelectorAll(".avis_ville");

  gsap.set(avis_nom_ville, {
    opacity: 0,
  });

  gsap.to(avis_nom_ville, {
    duration: 2,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: avis_nom_ville,
      scrub: true,
      toggleActions: "play resume none none"
    }
  });

  gsap.set(avis_ville, {
    opacity: 0,
  });

  gsap.to(avis_ville, {
    duration: 2,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: avis_ville,
      scrub: true,
      toggleActions: "play resume none none"
    }
  });
});

let stars = gsap.timeline();
stars.to("#star1", {
    opacity: 0.8
  }),
  stars.to("#star2", {
    opacity: 0.8,
    delay: 0.01
  }),
  stars.to("#star3", {
    opacity: 0.8,
    delay: 0.01
  }),
  stars.to("#star4", {
    opacity: 0.8,
    delay: 0.01
  }),
  stars.to("#star5", {
    opacity: 0.8,
    delay: 0.01
  }),

  ScrollTrigger.create({
    animation: stars,
    trigger: ".avis_starf",
    // markers: true,
    start: "center 50%",
    scrub: true,
    end: "center 30%",
    toggleActions: "play resume none reverse",
  });

// Sixième section
// conteneur de photos qu'on peut déplacer avec les mouvements de souris 
// pas très très bien pour le responsive mobile mais j'ai replacé les images en colonne donc le mouve over est juste bloqué 
// hover sur les images
let conteneur_photos = document.querySelector('.galerie_photos');
let carte_photos = document.querySelector('.galerie_carte');
let galerie1 = document.querySelector('.galerie1');
let galerie_div = document.querySelector('.galerie_div');
let galerie_conteneur = ".galerie_conteneur";
let mapWidth = gsap.utils.mapRange(0, document.body.clientWidth, 100, -100)
let mapHeight = gsap.utils.mapRange(0, document.body.clientHeight, 50, -50)

//animation galerie et mouvement de souris 

window.addEventListener("mousemove", (e) => {

  gsap.to(galerie_conteneur, {
    duration: 3,
    overwrite: "auto",
    x: mapWidth(e.clientX) * 1.1,
    y: mapHeight(e.clientY) * 2,
    stagger: 0.1,
    ease: "power4.out",
  });
});

//animation sur le hover de la galerie
document.querySelectorAll(".galerie_image").forEach(function (element) {

  let animation = gsap.timeline({
    paused: true
  });

  animation.to(element, {
    scale: 1.2,
    duration: .5,
    ease: "power1.inOut"
  });

  element.addEventListener("mouseenter", function () {
    animation.play();
  });

  element.addEventListener("mouseleave", function () {
    animation.reverse();
  });
});