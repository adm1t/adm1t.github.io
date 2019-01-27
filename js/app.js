let  tl = new TimelineMax();

let letters = document.getElementsByClassName("letter");
let startContainer = document.getElementById("start-container");
let particlesSection = document.getElementById("particles-js");
let contactsSection = document.querySelector(".contacts-section");

window.addEventListener("load", () => {

    tl
        .staggerFromTo(letters, 0.75, {backgroundColor:"black"},
            {opacity:1, backgroundColor:"unset",  ease: Expo. easeOut}, 0.5)
        .to(startContainer, 0, {display: "none"})
        .to(particlesSection, 0, {display: "unset"})
        .to(contactsSection, 0, {display: "flex"});

    setTimeout(() => {
        particlesJS.load('particles-js', 'json/particles.json');

    }, 5000)

});

var myProjects = document.querySelectorAll("#my-projects-viewer nav .project");
[].forEach.call(myProjects, function (el) {
    el.addEventListener("click", function(){
        if(!this.classList.contains("selected")){
            changeSelectedProject(this);
        }
    })
});

function changeSelectedProject(selectedItem){
    var prevSelectedProjectItems = document.querySelectorAll("#my-projects-viewer .selected");
    [].forEach.call(prevSelectedProjectItems, function(item){
        item.classList.remove("selected")
    });

    selectedItem.classList.add("selected");
    var selectedItemID = selectedItem.id;
    var newSelectedProjectItems = document.querySelectorAll("#my-projects-viewer ." + selectedItemID);
    [].forEach.call(newSelectedProjectItems, function(item){
        item.classList.add("selected")
    });

    if(selectedItem.classList.contains("upper")){
        var firstUnselectedProject = document.querySelectorAll("#my-projects-viewer nav .project:not(.selected)")[0];
        firstUnselectedProject.classList.add("upper");
        selectedItem.classList.remove("upper");
    }
}
