/* Javascript */
gsap.registerPlugin(ScrollTrigger);

//lecture de la video
// document.querySelector('.video_intro').playbackRate = .5;


// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".navigation");

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }


// const navLink = document.querySelectorAll(".nav-item");

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }



let autres_titres = document.querySelector(".autres_titres");

let menu_hamburger = document.querySelector(".hamburger");

menu_hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
if(autres_titres.classList.contains("autres_titres_mobile")){
  autres_titres.classList.remove("autres_titres_mobile");
  menu_hamburger.style.opacity = "1"; 


}
else {
  autres_titres.classList.add("autres_titres_mobile");  
  menu_hamburger.style.opacity = "0.5"; 
  
}


// document.addEventListener("click", function(){
//   autres_titres.classList.remove("autres_titres_mobile");

// });

}


let links_nav = document.querySelectorAll(".nav-item");

links_nav.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  autres_titres.classList.remove("autres_titres_mobile");
}





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







// section activités 


// let activites_timeline = gsap.timeline({onComplete: maFonction, repeat: 1, repeatDelay: 3, yoyo:true});
//     fish.from(".poisson #fish", {opacity:1, xPercent:-200, rotation:200, duration:1}),
//     fish.from(".poisson .text", {opacity:0, scale:10, duration:1.2, ease:"power4"}),
//     fish.from(".poisson #jimmy", {opacity:0, skewX:15, duration:0.3, scale:0.5, duration:1, ease:"power2"}, "-=0.7"),
//     fish.from(".wall", {xPercent:-100, duration:1, ease:"bounce"});

//     ScrollTrigger.create({
//         animation:fish,
//         trigger:".poisson",
//         markers:true,
//         start:"center center",
//         toggleActions:"restart none none reverse",
//         //scrub:true,
//         //pin:true,
//       });


let activites = document.querySelectorAll(".activite_carte");

activites.forEach((element) => {
	let photo = element.querySelectorAll(".activite_photo");
  let description = element.querySelectorAll(".activite_description") 

    gsap.set(photo, { scale:0 });
  
    gsap.to(photo, {
        duration: 1.2,
        autoAlpha:1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: photo,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play resume reverse none"
        }
    });

    gsap.set(description, { scale:0 });
  
    gsap.to(description, {
        duration: 1,
        autoAlpha:1,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: photo,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play resume reverse none"
        }
    });
})




// let galerie_photos = document.querySelector('.galerie1');
// let activites2_photos = document.querySelector('.activites2_photos')
// let activites3_photos = document.querySelector('.activites3_photos')
let conteneur_photos = document.querySelector('.galerie_photos');

let carte_photos = document.querySelector('.galerie_carte');

let galerie1 = document.querySelector('.galerie1');
let galerie_div = document.querySelector('.galerie_div');




//   gsap.fromTo(".galerie_photos", {
//     xPercent: 0,
//   }, {
//     // xPercent: -activites3_photos.scrollWidth,
//       xPercent: -12,
  
//     // duration: 10,
//     // ease: "elastic",
//     scrollTrigger: {
//               trigger: ".galerie_photos",
//               start: "top bottom",
//               markers: true,
//               end: "top top",
//               toggleActions: "play resume none none ",
//       scrub: true,
//           }
//   });

// gsap.fromTo(".galerie2_photos", {
//   xPercent: -14,
// }, {
//   xPercent: -4,
//   // duration: 10,
//   // ease: "elastic",
//   scrollTrigger: {
//             trigger: ".galerie2_photos",
//             start: "top bottom",
//             markers: true,
//             end: "top top",
//             toggleActions: "play resume none none ",
//     scrub: true,
//         }
// });


// gsap.fromTo(".galerie3_photos", {
//   xPercent: 0,
// }, {
//   // xPercent: -activites3_photos.scrollWidth,
//     xPercent: -10,

//   // duration: 10,
//   // ease: "elastic",
//   scrollTrigger: {
//             trigger: ".galerie3_photos",
//             start: "top bottom",
//             markers: true,
//             end: "top top",
//             toggleActions: "play resume none none ",
//     scrub: true,
//         }
// });






let galerie_conteneur = ".galerie_conteneur";


let mapWidth = gsap.utils.mapRange(0, document.body.clientWidth, 100, -100)
let mapHeight = gsap.utils.mapRange(0, document.body.clientHeight, 100, -100)


window.addEventListener("mousemove", (e) => {
  

  
  gsap.to(galerie_conteneur, {
    duration: 3,
    overwrite: "auto",
    x: mapWidth(e.clientX),
    y: mapHeight(e.clientY),
    stagger: 0.1,
    ease: "power4.out",
  });


  // activites.forEach((element) => {
  //   gsap.to(element, {
  //     duration: 1,
  //     scale: 2,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //         trigger: element,
  //         start: "top bottom-=100",
  //         end: "bottom top+=100",
  //         toggleActions: "play resume reverse none"
  //     }
  // });

  // }



  // gsap.from(".galerie_image1", {
  //   opacity: 0,
  //   x: 400,
  //   duration: 2,
  //   ease: "power2"
  // });
});


// galerie_conteneur.addEventListener("mouseover", function(){
//   gsap.to(".galerie_image1", {
// scale: 0,
//     duration: 2,
//     ease: "power2"
//   });
// });




document.querySelectorAll(".galerie_image").forEach(function(element) {
  var animation = gsap.timeline({ paused: true });
  animation.to(element, {scale: 1.5, duration: .5, ease: "power1.inOut"});
  element.addEventListener("mouseenter", function () {animation.play();});
  element.addEventListener("mouseleave", function () {animation.reverse();});
});
