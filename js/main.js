$(document).ready(function () {
    $(".reveal-page").delay(100).animate({ opacity: 1 }, 500);
    $(".reveal-map").delay(1000).animate({ opacity: 1 }, 800);
    // $(".reveal-sun").delay(500).animate({ opacity: 1 }, 1000);
    $('#main-title').animate({ opacity: "1" }, 500);
    $('#about-title').animate({ left: 0, opacity: "1" }, 500);
    $('#contact-title').animate({ top: 0, opacity: "1" }, 500);
});

// Typewriter
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
