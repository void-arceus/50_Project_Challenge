const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".special-equal-to");
let input = document.getElementById("input-box");
const clearBtn = document.getElementById("clear-all-btn");
const delOneDigit = document.getElementById("deleteOne");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "=") {
      calResult();
      return;
    }
    input.value += btn.textContent;
  });
});

function calResult() {
  try {
    let res = eval(input.value);
    input.value = res;
  } catch (error) {
    input.value = "";
    alert(error.message);
  }
}

clearBtn.addEventListener("click", () => {
  input.value = "";
});

delOneDigit.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    e.preventDefault();
    input.value = input.value.slice(0, -1);
  }
  if (e.key === "Enter") {
    e.preventDefault();
    input.value = calResult();
  }
});

window.addEventListener("load", () => {
  input.value = "";
});