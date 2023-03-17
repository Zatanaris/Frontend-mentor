const openBtn = document.querySelector(".open__nav");
const CloseBtn = document.querySelector(".close__btn");
const Overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");

const ArrElements = [openBtn, CloseBtn, Overlay];

const AddEventOnElement = function (ArrElements, eventType, callback) {
    for (let i = 0, len = ArrElements.length; i < len; i++) {
        ArrElements[i].addEventListener(eventType, callback);
    }
};

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    Overlay.classList.toggle("active");
};

AddEventOnElement(ArrElements, "click", toggleNavbar);
