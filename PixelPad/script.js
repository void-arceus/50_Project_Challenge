const gridDiv = document.querySelector(".grid-div");
const eraserBtn = document.getElementById("eraseBtn");
const brush = document.getElementById("brushBtn");
const clearAllBtn = document.getElementById("clearBtn");

let isMouseDown = false;
let penColorInput = document.getElementById("penColorInput");
let penColor = penColorInput.value;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});

document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

for (let i = 0; i < 58 * 58; i++) {
  let div = document.createElement("div");
  div.classList.add("grid");
  gridDiv.appendChild(div);
}

let div = document.createElement("div");
let div1 = document.createElement("div");
div.classList.add("grid");
div1.classList.add("grid");
gridDiv.appendChild(div);
gridDiv.appendChild(div1);

eraserBtn.addEventListener("click", () => {
  penColor = "#ffffff";
});

brush.addEventListener("click", () => {
  penColor = penColorInput.value;
});

penColorInput.addEventListener("input", (e) => {
  penColor = e.target.value;
});

const gridDivs = document.querySelectorAll(".grid");
gridDivs.forEach(div => {
  div.addEventListener("mouseover", () => {
    if (isMouseDown) {
      div.style.backgroundColor = penColor;
    }
  });

  div.addEventListener("click", () => {
    div.style.backgroundColor = penColor;
  });
});

clearAllBtn.addEventListener("click", () => {
  const confirmClear = confirm("You sure you want to clear All. This action can't undo? ");
  if (confirmClear) {
    gridDivs.forEach(div => {
      div.style.backgroundColor = "#ffffff";
    });
  }
})