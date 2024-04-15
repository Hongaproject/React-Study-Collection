// import { legacy_createStore as createStore } from "redux";  // store은 data를 넣어주는 장소를 생성해준다.

// // 공식 문서에서 Redux Tookit을 사용하기를 권장한다.
// // 다운로드 후 configureStore를 권장함. 혹은 
// // createStore 옆에 legacy_createStore 작성해서 사용하기.

// // Store는 data를 저장하는 곳 
// // CreateStore는 reducer를 요구함.
// // Reducer는 data를 modify(수정) 해주는 함수로 reducer가 return하는 것은 application에 있는 data가 됨.

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// number.innerText = 0;

// // 이렇게 지정해서 사용을 하면 string 형식으로 사용이 가능하다.
// const ADD = "Add"; 
// const MINUS = "Minus";

// // countModify는 현재 상태의 어플리케이션과 함께 불려지는 함수이다. 현재 상태가 없다면 0으로 끝남. 그리고 action을 불러옴
// // action은 countModify와 소통하는 방식 reducer이 리턴하는 것은 무엇이든지 어플리케이션의 state가 되는 것
// // reducer은 current state와 action과 함께 불러짐 dispatch를 사용해서 action으로 보내 줌 action은 항상 object와 type이여야 한다.
// const countModify = (count = 0, action) => { // 함수로 받아옴. reducer은 initialState, action 되어있음 
//   // count++ count-- 는 action을 통해서 진행을 시킨다.
//   // Action : redux에서 function을 부를 때 쓰는 두 번째 parameter 혹은 argument으로 reducer와 소통하기 위한 방법
//   // Reducer에게 Action을 보내는 방법 : store.dispatch({key: value});

//   if (action.type === "Add"){ // 나는 switch문 보다 if문이 더 편해서 if문을 사용함.
//     return count + 1;
//   } else if (action.type === "Minus"){
//     return count - 1;
//   } else{
//     return count;
//   }
//   // switch 문으로 사용하는 것도 가능. - 첫 번째 개선방안
//   // switch(action.type){
//   //   case "Add":
//   //     return count + 1;
//   //   case "Minus":
//   //     return count - 1;
//   //   default:
//   //     return count;
//   // }
// };

// // store은 data를 저장하는 곳 createStore로 만들어주고 거기서 countModify를 사용한다
// const countStore = createStore(countModify); // store을 만들면 reducer를 만들어달라고 요청함. -> countModify

// const onChange = () => { 
//     number.innerText = countStore.getState(); 
//   } 
// countStore.subscribe(onChange); // subscribe는 store안에 있는 변화를 알 수 있게 도와준다. 
  
// // countStore.dispatch({ type: "Add" }); // dispatch를 사용해 action을 취함. action은 무조건 object와 type으로 받아야함
// add.addEventListener("click", () => countStore.dispatch({ type: "Add" }));  // 버튼과 연결하기.  
// minus.addEventListener("click", () => countStore.dispatch({ type: "Minus" }));

// // let count = 0; 
// // number.innerText = count; // 이 부분이 없이 코드를 실행하면 화면에 0이 나타나지 않음.

// // const updateText = () => { // 이 부분이 없을시 업데이트가 진행되지 않음.
// //     number.innerText = count;
// // };

// // const handleAdd = () => {
// //     // console.log("add");
// //     count = count + 1; // count++;도 가능
// //     updateText();
// // };

// // const handleMinus = () => {
// //     // console.log("minus");
// //     count = count - 1; // count--;도 가능
// //     updateText();
// // };

// // add.addEventListener("click", handleAdd); // 클릭이벤트 생성
// // minus.addEventListener("click", handleMinus);

// // 리덕스의 방식을 알기위해 코드를 작성함

// 이 부분을 index.js부분에 작성하면 코드가 실행된다.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore as createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer2 from './VltRedux/6 Redux/modules';

// 루트 리듀서 불러와서 사용하여 Provider을 사용하여 프로젝트에 적용 함.

// 루트 리듀서를 불러와서 새로운 스토어를 만들고 Provider를 사용해서 프로젝트에 적용한다.
const store = createStore(rootReducer2);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// 이 부분을 index.js부분에 작성하면 코드가 실행된다.
