// OBJECTS CAROUSEL

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


// *********************************************************************************
// ADD ELEMENTS IN DOM

let thumbImg = "";
let mainImg  = "";

images.forEach(curImg => {
    thumbImg += `
        <div class="thumb">
            <img src="./${curImg.image}" alt="${curImg.title}">
        </div>
    `;

    mainImg += `
        <div class="item">
            <img src="./${curImg.image}" alt="${curImg.title}">
            <div class="description">
                <h2>${curImg.title}</h2>
                <p>${curImg.text}</p>
            </div>
        </div>
    `;
})

document.querySelector(".thumbs").innerHTML += thumbImg;
document.querySelector(".items").innerHTML   = mainImg;


// *********************************************************************************
// ADD EVENT LISTENER

const imgItem   = document.querySelectorAll(".item");
const thumbItem = document.querySelectorAll(".thumb");

let activeIndex = 0;
showActiveIndex();

document.querySelector(".next").addEventListener("click", function(){
    showUp();
})

document.querySelector(".prev").addEventListener("click", function(){
    showDown();
})

thumbItem.forEach((curThumb, i) => {
    curThumb.addEventListener("click", function(){
        selectImg(i);
    })
})

// *********************************************************************************
// INTERVAL CAROUSEL

const thumbContainer = document.querySelector(".thumbs");

let myInterval = setInterval(showUp, 2000);

thumbContainer.addEventListener("mouseover", function(){
    clearInterval(myInterval)
})

thumbContainer.addEventListener("mouseout", function(){
    myInterval = setInterval(showUp, 2000);
})


// *********************************************************************************
// BUTTONS

document.getElementById("start").addEventListener("click", function(){
    clearInterval(myInterval);
    myInterval = setInterval(showUp, 2000);
})

document.getElementById("stop").addEventListener("click", function(){
    clearInterval(myInterval);
})

document.getElementById("invert").addEventListener("click", function(){
    clearInterval(myInterval);
    myInterval = setInterval(showDown, 2000);
})

// *********************************************************************************
// FUNCTION

function showActiveIndex () {
    imgItem[activeIndex].classList.add("active");
    thumbItem[activeIndex].classList.add("active");
}

function hideActiveIndex () {
    imgItem[activeIndex].classList.remove("active");
    thumbItem[activeIndex].classList.remove("active");
}

function showUp () {
    hideActiveIndex();
    (activeIndex < imgItem.length - 1) ? activeIndex++ : activeIndex = 0;
    showActiveIndex();
}


function showDown () {
    hideActiveIndex();
    (activeIndex > 0) ? activeIndex-- : activeIndex = imgItem.length - 1;
    showActiveIndex();
}


function selectImg (index) {
    hideActiveIndex();
    activeIndex = index;
    showActiveIndex();
}





