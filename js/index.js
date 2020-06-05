const link = document.querySelector("calc");

const display = document.querySelector(".display");

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));

function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".opers button")
  .forEach((button) => button.addEventListener("click", operPressed));

function operPressed(ev) {
  display.value += ev.target.innerText;
}

document.querySelector(".decimal").addEventListener("click", inputDecimal);

function inputDecimal() {
  display.value = display.value += ".";
}

document.querySelector(".eq").addEventListener("click", calculate);

function calculate() {
  display.value = eval(display.value);
}

document.querySelector(".clear").addEventListener("click", resetCalculator);

function resetCalculator() {
  display.value = "0";
}





     



