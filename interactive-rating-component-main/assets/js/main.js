const questio = document.querySelector(".Question--card");
const result = document.querySelector(".result--card");
const btn = document.querySelector(".btn");
const options = document.querySelectorAll("[data-rating-btn]");
const resultValue = document.getElementById("numero");

let lestResultValue = NaN;

btn.addEventListener("click", () => {
    if (lestResultValue) {
        questio.classList.add("hide");
        result.classList.remove("hide");
        resultValue.textContent = lestResultValue;
    }
});

for (let i = 0, len = options.length; i < len; i++) {
    options[i].addEventListener("click", function () {
        if (lestResultValue) options[lestResultValue - 1].classList.remove("active");

        lestResultValue = Number(this.textContent);
        this.classList.add("active");
    });
}
