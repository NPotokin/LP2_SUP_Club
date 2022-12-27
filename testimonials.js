// First create Data Structure
let testimonials = [
    {
        background: "url(images/bgAur1.png)",
        name: "Sam Collins",
        photo: "images/person2.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
    },
    {
        background: "url(images/bgAur2.png)",
        name: "Sara Schmidt",
        photo: "images/person3.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
    },
    {
        background: "url(images/bgAur3.png)",
        name: "Arthur Klein",
        photo: "images/person4.png",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" 
    },
]

// Next Assign Variables to html objects we want to work with 
let bg = document.getElementById("bg-photo");
const nam = document.getElementById("person-name");
let phot = document.getElementById("person-photo");
let rev = document.getElementById("person-text");
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

// Set initial state
let currentItem = 0;

// load initial state
window.addEventListener("DOMContentLoaded", 
currentItem => showPerson(currentItem));

// Define main function
function showPerson(currentItem) {
    let item = testimonials[currentItem]; // Defined item as object within array
    bg.style.backgroundImage = item.background;
    nam.textContent = item.name;
    phot.src = item.photo;
    rev.textContent = item.review;
}

// Button Actions
nextBtn.addEventListener("click", function() {
    currentItem ++;
    if (currentItem >= testimonials.length) {
    currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function() {
    currentItem --;
    if (currentItem < 0) {
        currentItem = testimonials.length - 1;
    }
    showPerson(currentItem);
});