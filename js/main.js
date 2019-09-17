document.addEventListener("DOMContentLoaded", function() {
    const revealPage = document.querySelectorAll(".reveal-page");
        if (revealPage) {
        setTimeout(() => {
            revealPage[0].classList.add("show");
        }, 100);
    }
    // const revealMap = document.getElementsByClassName("reveal-map");
    // if (revealMap) {
    //     revealMap[0].classList.add("show");
    // }
    if (homePage) {

    }
});

// TypewriterJS

const homePage = document.querySelectorAll(".home");
if (homePage) {
    const typewriter = new Typewriter('#typewriter', {
        autoStart: true,
        loop: true,
    });
    typewriter
    .typeString('HTML / S(CSS)')
    .pauseFor(500)
    .deleteAll(40)
    .start()
    .typeString('Javascript')
    .pauseFor(500)
    .deleteAll(40)
    .start()
    .typeString('Wordpress')
    .pauseFor(500)
    .deleteAll(40)
    .start()
    .typeString('PHP')
    .pauseFor(500)
    .deleteAll(40)
    .typeString('Gulp')
    .pauseFor(500)
    .deleteAll(40);
}

// let logoRise = document.getElementById("home-logo");
// const scaleHandler = (scale, duration, elasticity) => {
//     // anime.remove(logoRise);
//     anime({
//         targets: logoRise,
//         scale: scale,
//         duration: duration,
//         elasticity: elasticity
//     });
// }
// const enterHandler = () => { scaleHandler(1.07, 800, 400) };
// const leaveHandler = () => { scaleHandler(1.0, 600, 300) };
// logoRise.addEventListener('mouseenter', enterHandler, false);
// logoRise.addEventListener('mouseleave', leaveHandler, false);



// $(".social-link").mouseover(function(){
//     $(".social-link").addClass("hover-rise");
//   })


// let socialLink = document.getElementsByClassName("social-link");
// const animateSocialRise = (scale, duration, elasticity) => {
//     anime.remove(logoRise);
//     anime({
//         targets: socialLink[0],
//         scale: scale,
//         duration: duration,
//         elasticity: elasticity
//     });
// }
// const enterLink = () => { animateSocialRise(1.07, 800, 400) };
// const leaveLink = () => { animateSocialRise(1.0, 600, 300) };
// socialLink[0].addEventListener('mouseenter', enterLink, false);
// socialLink[0].addEventListener('mouseleave', leaveLink, false);


// homepage social icons slide in

// if (document.getElementsByClassName("home").length>0) {
//     anime({
//         targets: '.social-link',
//         translateX: 500,
//         delay: anime.stagger(300),
//         easing: 'spring(2, 95, 50, 0)'
//     });
// }


