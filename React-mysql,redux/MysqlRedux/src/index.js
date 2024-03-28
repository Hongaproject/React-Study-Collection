import { createStoreHook } from "react-redux";

const add = document.getElementById("add"); // 태그에 있는 id부분을 사용함
const minus = document.getElementById("minus");
const number = document.querySelector("span"); // 괄호 속에 제공하는 선택자와 일치하는 문서를 찾아서 반환 

// store를 사용할 때 꼭 필요 data를 수정하는 부분
const countModifier = () => {
    return "hellop";
}

// store데이터를 저장하는 곳
const countStore = createStoreHook(countModifier);

console.log(countStore);


// let count = 0; 
// number.innerText = count; // 이 부분이 없이 코드를 실행하면 화면에 0이 나타나지 않음.

// const updateText = () => { // 이 부분이 없을시 업데이트가 진행되지 않음.
//     number.innerText = count;
// };

// const handleAdd = () => {
//     // console.log("add");
//     count = count + 1; // count++;도 가능
//     updateText();
// };

// const handleMinus = () => {
//     // console.log("minus");
//     count = count - 1; // count--;도 가능
//     updateText();
// };

// add.addEventListener("click", handleAdd); // 클릭이벤트 생성
// minus.addEventListener("click", handleMinus);

// 리덕스의 방식을 알기위해 코드를 작성함

