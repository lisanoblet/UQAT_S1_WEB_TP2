/* Javascript */
gsap.registerPlugin(ScrollTrigger);

//lecture de la video
// document.querySelector('.video_intro').playbackRate = .5;


gsap.from(".h1_introduction", {
  opacity: 0,
  x: 400,
  duration: 2,
  ease: "power2"
});

gsap.from(".h2_introduction", {
  opacity: 0,
  x: 400,
  duration: 2.5,
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





// SECTION equipe 
// passage d'un scroll vertical à horizontal puis vertical
let equipe_div = document.querySelectorAll(".equipe_div");

equipe_div.forEach(section => {
  
//gsap.utils.toArray(".equipe_div").forEach((section) => {

  if (section.classList.contains('horizontal')) {

    const conteneur_cartes = section.querySelector('.section_cartes')
    const personne_carte = section.querySelector('.section_carte')

    gsap.to(conteneur_cartes, {
      //x: () => { return -(cartesWrap.scrollWidth - window.innerWidth + window.innerWidth*0.05) },
      //x: () => {return - ((cartesWrap.scrollWidth - window.innerWidth + window.innerWidth*0.05) + (window.innerWidth/2 - onecarte.offsetWidth/2))},
      x: () => {
        return - ((conteneur_cartes.scrollWidth - window.innerWidth + window.innerWidth*0.05) + (window.innerWidth/2 - personne_carte.offsetWidth/2))
        // return -conteneur_cartes.scrollWidth + personne_carte.offsetWidth * 4.5
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
        markers: true,
      },
    });

  } else {

    ScrollTrigger.create({
      markers: true,
      trigger: section,
      start: () => "top top",
      pin: true,
      anticipatePin: 1,
    });

  }

});






/* PARTIE OBJECTIFS */

// gsap.from(".ottawa_images", {
//     opacity: 0,
//     xPercent: -100,
//     scrollTrigger: {
//         trigger: ".ottawa_images",
//         start: "top bottom",
//         markers: true,
//         end: "top center",
//         //Events : onEnter, onLeave, onEnterBack, onLeaveBack
//         toggleActions: "play resume none none ",
//         //Options: play, pause, resume, reset, restart, complete, reverse, none
// scrub: true,
// //link animation au scroll de la souris 
//     }
// });

// gsap.from(".ottawa_airbnb_images", {
//     opacity: 0,
//     xPercent: 100,
//     scrollTrigger: {
//         trigger: ".ottawa_airbnb_images",
//         start: "top bottom",
//         markers: true,
//         end: "top center",
//         toggleActions: "play resume none none ",
// scrub: true,
//     }
// });


// gsap.from(".ottawa_souhaits", {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".ottawa_souhaits",
//         start: "top bottom",
//         markers: true,
//         end: "top center",
//         toggleActions: "play resume none none ",
// scrub: true,
//     }
// });

// gsap.from(".ottawa_souhaits_liste", {
//     opacity: 0,
//     scrollTrigger: {
//         trigger: ".ottawa_souhaits",
//         start: "top bottom",
//         markers: true,
//         end: "top center",
//         toggleActions: "play resume none none ",
// scrub: true,
//     }
// });

// let activite = document.querySelector('.activite2')
// gsap.from(".activites_photos", {
//   opacity: 0,
//   xPercent: activite.scrollWidth,

//   scrollTrigger: {
//       trigger: ".activites_photos",
//       start: "top bottom",
//       markers: true,
//       end: "center center",
//       //Events : onEnter, onLeave, onEnterBack, onLeaveBack
//       toggleActions: "play resume none none ",
//       //Options: play, pause, resume, reset, restart, complete, reverse, none
// scrub: true,
// //link animation au scroll de la souris 
//   }
// });


// let activite = document.querySelector('.activite2')

// gsap.fromTo(".box", {
//   opacity: 0,
//     xPercent: activite.scrollWidth,

//     scrollTrigger: {
//         trigger: ".activites_photos",
//         start: "top bottom",
//         markers: true,
//         end: "center center",
//         //Events : onEnter, onLeave, onEnterBack, onLeaveBack
//         toggleActions: "play resume none none ",
//         //Options: play, pause, resume, reset, restart, complete, reverse, none
// }, {
//   xPercent: -1000,
//   scrub: true
// });



// gsap.utils.toArray('.activites_photos').forEach((div, index) => {
//   const w = div.querySelector('.wrapper');
//   const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - div.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
//   gsap.fromTo(w, { x }, {
//     x: xEnd,
//     scrollTrigger: {
//       trigger: div,
//       scrub: 0.5 } });


// });


// gsap.fromTo(".activites_photos", {
//   xPercent: 100
// }, {
//     xPercent: -100, 
//     duration: 1,
//   //   scrollTrigger: {
//   //             trigger: ".activites_photos",
//   //             start: "top bottom",
//   //             markers: true,
//   //             end: "center center",
//   //             //Events : onEnter, onLeave, onEnterBack, onLeaveBack
//   //             toggleActions: "play resume none none "

//   // },
//   );



// let galerie_photos = document.querySelector('.galerie1');
// let activites2_photos = document.querySelector('.activites2_photos')
// let activites3_photos = document.querySelector('.activites3_photos')
let conteneur_photos = document.querySelector('.galerie_photos');

let carte_photos = document.querySelector('.galerie_carte');

let galerie1 = document.querySelector('.galerie1');
let galerie_div = document.querySelector('.galerie_div');


// return - ((conteneur_cartes.scrollWidth - window.innerWidth + window.innerWidth*0.05) + (window.innerWidth/2 - personne_carte.offsetWidth/2))


// gsap.fromTo(".galerie_photos", {
//   xPercent: 0,
// }, {
//   xPercent:  -(conteneur_photos.scrollWidth - window.innerWidth + window.innerWidth),
//   // duration: 10,
//   // ease: "elastic",
//   scrollTrigger: {
//             trigger: ".galerie_photos",
//             start: "top bottom",
//             markers: true,
//             end: "top top",
//             toggleActions: "play resume none none ",
//     scrub: true,
//         }

// });

// gsap.to(conteneur_photos, 
//   {
    
//   x: - (conteneur_photos.scrollWidth/2),
//   ease: "none",

//     scrollTrigger: {
//               trigger: galerie_div,
//               start: "center center",
//               markers: true,
//               end: () => "+=" + (conteneur_photos.scrollWidth),
//               scrub: true,
//       pin: true,
//       anticipatePin: 1,
//       invalidateOnRefresh: true,

//           }
  
//   });




  // x: () => {
  //     return - ((conteneur_cartes.scrollWidth - window.innerWidth + window.innerWidth*0.05) + (window.innerWidth/2 - personne_carte.offsetWidth/2))
  //     // return -conteneur_cartes.scrollWidth + personne_carte.offsetWidth * 4.5
  //   },
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: section,
  //     start: () => "center center",
  //     end: () => "+=" + conteneur_cartes.scrollWidth,
  //     scrub: true,
  //     pin: true,
  //     invalidateOnRefresh: true,
  //     anticipatePin: 1,
  //     markers: true,

  gsap.fromTo(".galerie_photos", {
    xPercent: 0,
  }, {
    // xPercent: -activites3_photos.scrollWidth,
      xPercent: -10,
  
    // duration: 10,
    // ease: "elastic",
    scrollTrigger: {
              trigger: ".galerie_photos",
              start: "top bottom",
              markers: true,
              end: "top top",
              toggleActions: "play resume none none ",
      scrub: true,
          }
  });

gsap.fromTo(".galerie2_photos", {
  xPercent: -10,
}, {
  xPercent: 0,
  // duration: 10,
  // ease: "elastic",
  scrollTrigger: {
            trigger: ".galerie2_photos",
            start: "top bottom",
            markers: true,
            end: "top top",
            toggleActions: "play resume none none ",
    scrub: true,
        }
});


gsap.fromTo(".galerie3_photos", {
  xPercent: 0,
}, {
  // xPercent: -activites3_photos.scrollWidth,
    xPercent: -10,

  // duration: 10,
  // ease: "elastic",
  scrollTrigger: {
            trigger: ".galerie3_photos",
            start: "top bottom",
            markers: true,
            end: "top top",
            toggleActions: "play resume none none ",
    scrub: true,
        }
});