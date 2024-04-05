// ducks패턴을 사용하여 코드 작성
// ducks패턴 설계규칙
// 1. reducer은 export default로 내보낸다.
// 2. action함수는 export로 내보낸다.
// 3. 액션타입 정의할 때 reducer/ACTION_TYPE형태로 적어줘야 한다. 접두사를 사용하는 이유는, 서로 다른 리듀서에서 액션이름이 중첩되는것을 방지 하기 위해서 사용함.

// 액션 타입 생성, 액션 생성함수, 리듀서를 작성한다.

// 액션타입 부분
const INCREASE = 'Counter/INCREASE'; // 접두사 사용해서 액션 이름 중첩 방지.
const DECREASE = 'Counter/DECREASE';
const SET_DIFF = 'Counter/SET_DIFF';

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const setDiff = (diff) => ({ type: SET_DIFF, diff});

// 리듀서 사용시 state겂 초기화
const initialState = {
    number: 0,
    diff: 1
};

// 리듀서
export default function Counter (state = initialState, action) {
    switch(action.type){
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return{
                ...state,
                number: state.number - state.diff
            }
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            };
        default:
            return state;
    }
    
} 