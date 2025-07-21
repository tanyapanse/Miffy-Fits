const bases = ["pinkmiffy.png", "bluemiffy.png", "greenmiffy.png"];
const hats = ["", "bow.png", "sombrero.png"];
const shoes = ["", "pinkshoe.jpg", "brownshoe.jpg"];

let currentBase = 0;
let currentHat = 0;
let currentShoe = 0;

let baseToggleActive = false;
let hatToggleActive = false;
let shoeToggleActive = false;
let activeCategory = null;

const baseImg = document.getElementById("base-img");
const hatImg = document.getElementById("hat-img");
const shoeImg = document.getElementById("shoe-img");

const backBtn = document.getElementById("back-btn");
const forwardBtn = document.getElementById("forward-btn");

const clothesBtn = document.getElementById("clothes-btn");
const hatBtn = document.getElementById("hats-btn");
const shoeBtn = document.getElementById("shoes-btn");

const clickSound = new Audio("click.mp3");

// Clothes button logic
clothesBtn.addEventListener("click", () => {
    baseToggleActive = !baseToggleActive;

    if (baseToggleActive) {
        activeCategory = "base";
        clothesBtn.style.transform = "scale(1.2)";
        hatToggleActive = false;
        hatBtn.style.transform = "scale(1)";
        shoeToggleActive = false;
        shoeBtn.style.transform = "scale(1)";
    } else {
        activeCategory = null;
        clothesBtn.style.transform = "scale(1)";
    }

    clickSound.play();
});

// Hat button logic
hatBtn.addEventListener("click", () => {
    hatToggleActive = !hatToggleActive;

    if (hatToggleActive) {
        activeCategory = "hat";
        hatBtn.style.transform = "scale(1.2)";
        hatImg.src = hats[currentHat];

        baseToggleActive = false;
        clothesBtn.style.transform = "scale(1)";
        shoeToggleActive = false;
        shoeBtn.style.transform = "scale(1)";
    } else {
        activeCategory = null;
        hatBtn.style.transform = "scale(1)";
    }

    clickSound.play();
});

// Shoe button logic
shoeBtn.addEventListener("click", () => {
    shoeToggleActive = !shoeToggleActive;

    if (shoeToggleActive) {
        activeCategory = "shoe";
        shoeBtn.style.transform = "scale(1.2)";
        shoeImg.src = shoes[currentShoe];

        baseToggleActive = false;
        clothesBtn.style.transform = "scale(1)";
        hatToggleActive = false;
        hatBtn.style.transform = "scale(1)";
    } else {
        activeCategory = null;
        shoeBtn.style.transform = "scale(1)";
        // Don't clear shoeImg.src — user choice stays!
    }

    clickSound.play();
});

// Back button logic
backBtn.addEventListener("click", () => {
    if (activeCategory === "base") {
        currentBase = (currentBase - 1 + bases.length) % bases.length;
        baseImg.src = bases[currentBase];
    } else if (activeCategory === "hat") {
        currentHat = (currentHat - 1 + hats.length) % hats.length;
        hatImg.src = hats[currentHat];
    } else if (activeCategory === "shoe") {
        currentShoe = (currentShoe - 1 + shoes.length) % shoes.length;
        shoeImg.src = shoes[currentShoe];
    }

    clickSound.play();
});

// Forward button logic
forwardBtn.addEventListener("click", () => {
    if (activeCategory === "base") {
        currentBase = (currentBase + 1) % bases.length;
        baseImg.src = bases[currentBase];
    } else if (activeCategory === "hat") {
        currentHat = (currentHat + 1) % hats.length;
        hatImg.src = hats[currentHat];
    } else if (activeCategory === "shoe") {
        currentShoe = (currentShoe + 1) % shoes.length;
        shoeImg.src = shoes[currentShoe];
    }

    clickSound.play();
});