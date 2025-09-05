const billAmount = document.getElementById("bill-amount");
const peopleCount = document.getElementById("people-count");
const tipYes = document.getElementById("tipYes");
const tipNo = document.getElementById("tipNo");
const calculateAmount = document.getElementById("calculate-amount");
const displayOutput = document.querySelector(".display-result");
const closeResult = document.getElementById("close-display-result");
const tipAmountInputBox = document.querySelector(".tip-amount-input-display");
let tipAmountInput = document.getElementById("tip-amount");
let displayAmount = document.getElementById("display-amount");
let displayBill = document.getElementById("dis-bill-amount");
let displayTip = document.getElementById("dis-tip-amount");
let tipAmount = 0;


tipYes.addEventListener("click", () => {
  tipAmountInputBox.classList.add("active");
});

tipNo.addEventListener("click", () => {
  tipAmountInputBox.classList.remove("active");
  tipAmountInput.value = "";
});

tipAmountInput.addEventListener("input", (e) => {
  tipAmount = e.target.value;
});

calculateAmount.addEventListener("click", () => {
  if (tipYes.checked === true && Number(tipAmountInput.value) <= 0) {
    alert("Enter valid tip amount!");
    return;
  }
  if (Number(billAmount.value) <= 0) {
    alert("Enter a valid Amount.");
    return;
  }
  if (Number(peopleCount.value) <= 0) {
    alert(`oops! Invalid People Number.\nTry Again !!
      `);
    return;
  }
  let res = (Number(billAmount.value) + Number(tipAmount)) / Number(peopleCount.value);
  displayAmount.textContent += res.toFixed(2);
  displayBill.textContent += billAmount.value;
  displayTip.textContent += tipAmount;
  displayOutput.classList.add("active");
});

closeResult.addEventListener("click", () => {
  displayOutput.classList.remove("active");
  billAmount.value = 0;
  peopleCount.value = 0;
  tipYes.checked = false;
  tipNo.checked = false;
  tipAmountInput.value = "";
  tipAmountInput.classList.remove("active");
});

window.addEventListener("load", () => {
  displayOutput.classList.remove("active");
  billAmount.value = "";
  peopleCount.value = "";
  tipYes.checked = false;
  tipNo.checked = false;
  tipAmountInput.value = "";
  tipAmountInput.classList.remove("active");
});
