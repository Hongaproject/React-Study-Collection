import { legacy_createStore as createStore } from "redux";

// counter과 todolist에 관한 리듀서 및 스토어 까지 다 넣는 방식을 사용하려고 함. 
// createStore 밑줄 그어진것은, @reduxjs/toolkit의 권장사용을 유도하기 위해 취소줄이 그어짐.
// legacy_createStore as createStore 이렇게 사용하면 오류가 나타나지 않음.

// 리덕스에서 사용 될 state 초기 값 지정
const initialState = {
    counter: 0,
  text: '',
  list: []
};

// 액션 타입 지정
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 정의
const increase = () => ({
    type: INCREASE
})
const decrease = () => ({
    type: DECREASE
});
  
const changeText = text => ({ // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
    type: CHANGE_TEXT,
    text 
});
  
const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// 리듀서 제작
// 리듀서는 불변성을 유지해야한다. 
function reducer (state = initialState, action) { // state 의 초깃값을 initialState 로 지정했습니다.
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1
        };
      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1
        };
      case CHANGE_TEXT:
        return {
          ...state,
          text: action.text
        };
      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item)
        };
      default:
        return state;
    }
  }

// store  제작
const store = createStore(reducer);

console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회합니다.
// dispatch로 action을 준 내용이 나타나게 된다.

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(listener); // 상태를 감지하고 싶을때 리덕스 내장함수인 subscribe를 사용하면 된다.

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));


