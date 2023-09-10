import { legacy_createStore as createStore } from "redux";  // store은 data를 넣어주는 장소를 생성해준다.

// Store는 data를 저장하는 곳 
// CreateStore는 reducer를 요구함.
// Reducer는 data를 modify(수정) 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModify = (count = 0, action) => { // 함수로 받아옴.
  // count++ count-- 는 action을 통해서 진행을 시킨다.
  // Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
  // Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});
  if (action.type === "Plus"){
    return count + 1;
  } else if (action.type === "Minus"){
    return count - 1;
  } else{
    return count;
  }
};

const countStore = createStore(countModify); // store을 만들면 reducer를 만들어달라고 요청함.

const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

// countStore.dispatch({ type: "Add" }); // dispatch를 사용해 action을 취함. action은 무조건 object로 받아야함
plus.addEventListener("click", () => countStore.dispatch({ type: "Plus" }));
minus.addEventListener("click", () => countStore.dispatch({ type: "Minus" }));

