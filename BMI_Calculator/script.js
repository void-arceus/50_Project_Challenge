let height = document.getElementById("height");
let weight = document.getElementById("weight");
let resultBtn = document.getElementById("resultBtn");
let underweight = document.querySelector(".underweight");
let normal = document.querySelector(".normal"); 
let overweight = document.querySelector(".overweight"); 
let obese = document.querySelector(".obese");

resultBtn.addEventListener("click", () => {
  let heightInMeters = height.value / 100;
  let result = (Number(weight.value) / (heightInMeters * heightInMeters)).toFixed(2);
  if (result < 18.5) {
    underweight.classList.add("active");
    setTimeout(() => {
      underweight.classList.remove("active");
    }, 4000);
  }
  else if (result >= 18.5 && result <= 24.9) {
    normal.classList.add("active");
    setTimeout(() => {
      normal.classList.remove("active");
    }, 4000);
  }
  else if (result >= 25.0 && result <= 29.9) {
    overweight.classList.add("active");
    setTimeout(() => {
      overweight.classList.remove("active");
    }, 4000);
  }
  else if (result >= 30.0) {
    obese.classList.add("active");
    setTimeout(() => {
      obese.classList.remove("active");
    }, 4000);
  }
  height.value = "";
  weight.value = ""
});

window.addEventListener("load", () => {
  height.value = "";
  weight.value = "";
})