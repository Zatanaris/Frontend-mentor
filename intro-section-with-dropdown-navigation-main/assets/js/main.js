const BtnFeatures = document.getElementById("Features");
const BtnCompany = document.getElementById("Company");
const DropDownF = document.querySelector(".Features");
const DropDownC = document.querySelector(".Company");
const OpenBtn = document.querySelector(".open-btn");
const CloseBtn = document.querySelector(".close-btn");
const NavBar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

const ArrElement = [OpenBtn, CloseBtn, overlay];

const AddEnventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
};

const toggleNav = function () {
    NavBar.classList.toggle("active");
    overlay.classList.toggle("active");
};

AddEnventOnElements(ArrElement, "click", toggleNav);

BtnFeatures.addEventListener("click", () => {
    let arrow = document.querySelector(".nav--item #Features img");
    DropDownF.classList.toggle("active");
    if (DropDownF.classList.contains("active")) {
        arrow.src = "assets/images/icon-arrow-up.svg";
    } else {
        arrow.src = "assets/images/icon-arrow-down.svg";
    }
});

BtnCompany.addEventListener("click", () => {
    let arrow = document.querySelector(".nav--item #Company img");
    DropDownC.classList.toggle("active");
    if (DropDownC.classList.contains("active")) {
        arrow.src = "assets/images/icon-arrow-up.svg";
    } else {
        arrow.src = "assets/images/icon-arrow-down.svg";
    }
});
