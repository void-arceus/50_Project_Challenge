let c = document.getElementById("celsius-input");
let f = document.getElementById("fahrenheit-input");
let k = document.getElementById("kelvin-input");
let convert = document.getElementById("convert-btn");

c.addEventListener("input", () => {
  if (!c.value) {
    f.value = "";
    k.value = "";
    return;
  }
  f.value = ((c.value * 9 / 5) + 32).toFixed(2);
  k.value = (parseFloat(c.value) + 273.15).toFixed(2);
});

f.addEventListener("input", () => {
  if (!f.value) {
    c.value = "";
    k.value = "";
    return;
  }
  c.value = ((f.value - 32) * 5 / 9).toFixed(2);
  k.value = ((f.value - 32) * 5 / 9 + 273.15).toFixed(2);
});

k.addEventListener("input", () => {
  if (!k.value) {
    c.value = "";
    f.value = "";
    return;
  }
  c.value = (k.value - 273.15).toFixed(2);
  f.value = ((k.value - 273.15) * 9 / 5 + 32).toFixed(2);
});

window.addEventListener("load", () => {
  c.value = "";
  f.value = "";
  k.value = "";
});

