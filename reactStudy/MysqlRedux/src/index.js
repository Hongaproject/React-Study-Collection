const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
}

const clickPlus = () => {
  count = count + 1;
  // count++; // 둘 다 사용가능.
  updateText();
}

const clickMinus = () => {
  count = count - 1;
  updateText();
}

plus.addEventListener("click", clickPlus);
minus.addEventListener("click", clickMinus);
