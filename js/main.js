$(document).ready(function () {
    $(".reveal-page").delay(100).animate({ opacity: 1 }, 500);
    // $("#typewriter").css("background-color", "gray");
    // setTimeout(function () {
    //     $("#typewriter").css("background", "yellow");
    // }, 3050);
});

$(function () {
    $('#main-title').animate({ opacity: "1" }, 500);
});

$(function () {
    $('#about-title').animate({ left: 0, opacity: "1" }, 500);
});

$(function () {
    $('#contact-title').animate({ top: 0, opacity: "1" }, 500);
});

const typewriter = new Typewriter('#typewriter', {
    autoStart: true,
    loop: true,
});

typewriter
    .typeString('HTML / S(CSS)')
    .pauseFor(500)
    .deleteAll(30)
    .start()
    .typeString('Javascript')
    .pauseFor(500)
    .deleteAll(30)
    .start()
    .typeString('Wordpress')
    .pauseFor(500)
    .deleteAll(30)
    .start()
    .typeString('PHP')
    .pauseFor(500)
    .deleteAll(30);
