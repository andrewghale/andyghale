$(document).ready(function () {
    $(".reveal-page").delay(150).animate({ opacity: 1 }, 500);
    $(".reveal-map").delay(1000).animate({ opacity: 1 }, 800);
});

// TypewriterJS
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
