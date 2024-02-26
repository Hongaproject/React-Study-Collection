// 액션타입 생성
// Ducks 패턴으로 생성한다. -> 한 파일에 액션, 액션 생성 함수, 리듀서를 하나의 파일에 작성함.
// 이렇게 하면 다른 모듈과 액션이름 중복되는 것을 방지 가능.
const INCREASE = "Counter/INCREASE";
const DECREASE = "Counter/DECREASE";

// 액션 생성 함수 
// export 키워드 사용해서 내보내주세요.
export const increase = () => {
    return {type: INCREASE};
}
export const decrease = () => {
    return {type: DECREASE};
}
// 초기값 설정
const initialState = {
    num: 0,
}

// 리듀서 선언 
// https://lunit.gitbook.io/redux-in-korean/recipes/structuringreducers/basicreducerstructure
// 스위치문 사용이유 
// if/else는 빠르게 무거워지기 때문에 스위치 문을 사용한다고 함.
function Counter (state = initialState, action) {
    switch (action.type) {
        case INCREASE:
          return {
            ...state,
            num: state.num + 1,
          };
        case DECREASE:
          return {
            ...state,
            num: state.num - 1,
          };
        default:
          return {
            ...state,
          };
      }
}

export default Counter;