const questio = document.querySelector(".Question--card");
const result = document.querySelector(".result--card");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    questio.classList.toggle("hide");
    result.classList.toggle("hide");
});
