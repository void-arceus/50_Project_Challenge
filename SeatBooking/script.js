const row = document.querySelectorAll(".row");
// adding seats to each row
const letters = ["A", "B", "C", "D"];
row.forEach((r, idx) => {
  for (let i = 0; i < 10; i++) {
    let div = document.createElement("div");
    div.classList.add("seat", `${letters[idx]}-${i}`);
    div.textContent = `${letters[idx]}-${i + 1}`;
    r.appendChild(div);
  }
});

const row1Seats = document.querySelectorAll(".row-1 .seat");
const row2Seats = document.querySelectorAll(".row-2 .seat");
const row3Seats = document.querySelectorAll(".row-3 .seat");
const row4Seats = document.querySelectorAll(".row-4 .seat");
const bookSeatsBtn = document.getElementById("book-Selected");
const unselectBtn = document.getElementById("unselect-all");
const priceDisplayDiv = document.querySelector(".display-price-div");
let displayPrice = document.getElementById("displayPrice");
let totalPrice = 0;


// track selected seats from row 1 
let row1SelectedIdx = [];
let row2SelectedIdx = [];
let row3SelectedIdx = [];
let row4SelectedIdx = [];

row1Seats.forEach((seat, idx) => {
  seat.addEventListener("click", () => {
    if (seat.style.background === "green") {
      alert("This seat is already booked!");
      return;
    }
    if (seat.style.background === "red") {
      seat.style.background = "white";
      seat.style.color = "black";
      let index = row1SelectedIdx.indexOf(idx);
      if (index > -1) row1SelectedIdx.splice(index, 1);
    } else {
      seat.style.background = "red";
      seat.style.color = "white";
      row1SelectedIdx.push(idx);
    }
    calPrice();
  })
});

row2Seats.forEach((seat, idx) => {
  seat.addEventListener("click", () => {
    if (seat.style.background === "green") {
      alert("This seat is already booked!");
      return;
    }
    if (seat.style.background === "red") {
      seat.style.background = "white";
      seat.style.color = "black";
      let index = row2SelectedIdx.indexOf(idx);
      if (index > -1) row2SelectedIdx.splice(index, 1);
    }
    else {
      seat.style.background = "red";
      seat.style.color = "white";
      row2SelectedIdx.push(idx);
    }
    calPrice();
  })
});

row3Seats.forEach((seat, idx) => {
  seat.addEventListener("click", () => {
    if (seat.style.background === "green") {
      alert("This seat is already booked!");
      return;
    }
    if (seat.style.background === "red") {
      seat.style.background = "white";
      seat.style.color = "black";
      let index = row3SelectedIdx.indexOf(idx);
      if (index > -1) row3SelectedIdx.splice(index, 1);
    }
    else {
      seat.style.background = "red";
      seat.style.color = "white";
      row3SelectedIdx.push(idx);
    }
    calPrice();
  })
});

row4Seats.forEach((seat, idx) => {
  seat.addEventListener("click", () => {
    if (seat.style.background === "green") {
      alert("This seat is already booked!");
      return;
    }
    if (seat.style.background === "red") {
      seat.style.background = "white";
      seat.style.color = "black";
      let index = row4SelectedIdx.indexOf(idx);
      if (index > -1) row4SelectedIdx.splice(index, 1);
    }
    else {
      seat.style.background = "red";
      seat.style.color = "white";
      row4SelectedIdx.push(idx);
    }
    calPrice();
  })
});


function calPrice() {
  let r1 = 100 * row1SelectedIdx.length;
  let r2 = 200 * row2SelectedIdx.length;
  let r3 = 300 * row3SelectedIdx.length;
  let r4 = 500 * row4SelectedIdx.length;
  totalPrice = r1 + r2 + r3 + r4;
  displayPrice.textContent = totalPrice;
  priceDisplayDiv.classList.add("active");
}

bookSeatsBtn.addEventListener("click", () => {
  let input = confirm("Book selected seats?");

  if (input) {
    row1SelectedIdx.forEach(selectedIdx => {
      row1Seats[selectedIdx].style.background = "green";
    })
    row2SelectedIdx.forEach(selectedIdx => {
      row2Seats[selectedIdx].style.background = "green";
    })
    row3SelectedIdx.forEach(selectedIdx => {
      row3Seats[selectedIdx].style.background = "green";
    })
    row4SelectedIdx.forEach(selectedIdx => {
      row4Seats[selectedIdx].style.background = "green";
    })
    row1SelectedIdx = [];
    row2SelectedIdx = [];
    row3SelectedIdx = [];
    row4SelectedIdx = [];
    totalPrice = 0;
    displayPrice.textContent = 0;
    priceDisplayDiv.classList.remove("active");
  }
});

unselectBtn.addEventListener("click", () => {
  row1Seats.forEach(seat => {
    if (seat.style.background === "red") {
      seat.style.background = "white";
    }
  })
  row2Seats.forEach(seat => {
    if (seat.style.background === "red") {
      seat.style.background = "white";
    }
  })
  row3Seats.forEach(seat => {
    if (seat.style.background === "red") {
      seat.style.background = "white";
    }
  })
  row4Seats.forEach(seat => {
    if (seat.style.background === "red") {
      seat.style.background = "white";
    }
  })
  row1SelectedIdx = [];
  row2SelectedIdx = [];
  row3SelectedIdx = [];
  row4SelectedIdx = [];
  totalPrice = 0;
  priceDisplayDiv.classList.remove("active");
  displayPrice.textContent = 0;
});