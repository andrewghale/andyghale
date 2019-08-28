$(document).ready(function () {
    $(".reveal-page").delay(150).animate({ opacity: 1 }, 500);
    $(".reveal-map").delay(1000).animate({ opacity: 1 }, 800);
});

// TypewriterJS
if ($(".home").length > 0) {
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

let logoRise = document.getElementById("home-logo");
const animateRise = (scale, duration, elasticity) => {
    anime.remove(logoRise); // not sure what this does //
    anime({
        targets: logoRise,
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
}
const enterButton = () => { animateRise(1.07, 800, 400) };
const leaveButton = () => { animateRise(1.0, 600, 300) };
logoRise.addEventListener('mouseenter', enterButton, false);
logoRise.addEventListener('mouseleave', leaveButton, false);


// homepage social icons slide in
if ($(".home").length > 0 ) {
    anime({
        targets: '.social-link',
        translateX: 500,
        delay: anime.stagger(300),
        easing: 'spring(2, 95, 50, 0)'
    });
}

// git logo rises on hover
if ($(".home, .about, .contact").length > 0) {
    let hoverRise = document.getElementById("hover-rise");
    const animateRise = (scale, duration, elasticity) => {
    anime.remove(hoverRise); // not sure what this does //
    anime({
        targets: hoverRise,
        scale: scale,
        duration: duration,
        elasticity: elasticity
    });
    }
    const enterButton = () => { animateRise(1.07, 800, 400) };
    const leaveButton = () => { animateRise(1.0, 600, 300) };
    hoverRise.addEventListener('mouseenter', enterButton, false);
    hoverRise.addEventListener('mouseleave', leaveButton, false);
}
