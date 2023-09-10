import { createStoreHook } from "react-redux"; // store은 data를 넣어주는 장소를 생성해준다.

// Store는 data를 저장하는 곳 
// CreateStore는 reducer를 요구함.
// Reducer는 data를 modify(수정) 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.

// state는 바뀌는 data를 말한다. 

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const reducer = () => {

};

const store = createStoreHook();

let count = 0; // vanilla JS에서 이 부분이 state역할을 함.
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
