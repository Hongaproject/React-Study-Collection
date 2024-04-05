// Ducks패턴 사용 
// 원래 리덕스는 action, reducer등으로 나누어서 다른 파일에서 관리 했는데 이렇게 되면
// 하나 기능을 수정하면 이 기능과 연관된 파일 여러 개를 수정해야해서 불편함이 생김 불편함 개선하기 위해 나온 것이 Ducks패턴

// Ducks패턴은 구조중심이 아니라 기능중심으로 파일을 나눔. 단일기능을 작성할때나 기능을 수정시에 편리함.

// Ducks패턴은 각각 액션/액션함수/리듀서를 모아둔 것을 module이라고 함.

// 설계규칙
// 1. reducer은 export default로 내보낸다.
// 2. action함수는 export로 내보낸다.
// 3. 액션타입 정의할 때 reducer/ACTION_TYPE형태로 적어줘야 한다. 접두사를 사용하는 이유는, 서로 다른 리듀서에서 액션이름이 중첩되는것을 방지 하기 위해서 사용함.

// 리듀서 제작 부분
// 액션타입 작성 -> 'count/INCREASE 이런식으로 접두사를 두어 중복을 막아준다. 
const INCREASE = 'count/INCREASE';
const DECREASE = 'count/DECREASE';

// 액션생성 함수  
export const increase = () => ({ type: INCREASE }); 
// export const increase1 = () => {
//     return {typeof : INCREASE};
// } 
export const decrease = () => ({ type: DECREASE });

// reducer state 초기값 설정하기
const initialState = 0;

// redecer 생성 
export default function Count (state = initialState, action) {
    switch(action.type) {
        case INCREASE :
            return state + 1;
        case DECREASE :
            return state -1;
        default:
            return state;
    }

}
