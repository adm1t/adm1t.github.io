if ( /*@cc_on!@*/ false || !!document.documentMode) document.documentElement.classList.add('ie');

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", vh + "px");

window.addEventListener("resize", function() {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", vh + "px");
});

window.addEventListener("load", function() {

    const wrapper = document.querySelector(".main-wrapper");
    const title = document.querySelectorAll(".title");
    const letters = document.querySelectorAll(".title__letter");
    const delimeter = document.querySelectorAll(".title__delimeter");
    const contactLinks = document.querySelectorAll(".contacts__link");

    const tl = gsap.timeline();
    tl
        .to(wrapper, 0, { opacity: 1 })
        .fromTo(letters, 0.8, { opacity: 0, backgroundColor: "black" }, { opacity: 1, backgroundColor: "transparent", ease: Expo.easeOut, stagger: 0.4 }, 0.5)
        .fromTo(delimeter, 2.6, { xPercent: -100 }, { xPercent: 0, ease: Expo.easeOut }, "-=0.5")
        .fromTo(contactLinks, 2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, ease: Expo.easeOut, stagger: 0.1 }, "-=2.3")
});