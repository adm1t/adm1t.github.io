var  tl = new TimelineMax();

var mainWrapper = document.querySelector('.main-wrapper');
var title = document.querySelectorAll(".title");
var letters = document.querySelectorAll(".title__letter");
var delimeter = document.querySelectorAll(".title__delimeter");
var contactsSection = document.querySelector(".contacts");

window.addEventListener("load", function(){

    tl
        .to(title, 0, {y: 75})
        .staggerFromTo(letters, 0.5, {backgroundColor:"black"}, {opacity:1, backgroundColor:"unset",  ease: Expo. easeOut}, 0.5)
        .to(title, 0.75, {y: 0, ease: Power2.easeOut})
        .to(delimeter, 0.75, {width: '100%', ease: Power2.easeInOut}, '-=0.25')
        .fromTo(contactsSection, 0.75, {y: 50}, {y: 0, opacity: 1, ease: Power2.easeOut})
});
