
// Redux란? -> 자바스크립트 상태관리를 하는 라이브러리입니다. 
// 모든 상태의 업데이트를 액션으로 정의하고, 액션 정보에 기반하여 리듀서에서 상태를 업데이트하기 때문에, 상태를 더욱 쉽게 예측가능하게 하여 유지보수 측면에 긍정적인 효과를 나타낼 수 있다.

// Context API와 다른가요? -> Redux는 상태관리 라이브러리 Context API 상태관리 도구가 아니라 전역 데이터를 전달해주는 용도로 사용됩니다. 
// Context API는 props drilling을 방지하기 위해 사용되고, Redux는 상태 관리를 하기 위해 나온 도구입니다.

// redux 흐름 -> 
// 1. 하나의 중앙 데이터 store를 가진다. 
// 2. 상태값을 변경 할 때 데이터들의 state값을 수정할 reducer함수를 생성 
// 3. dispatch를 사용해 reducer에게 state값을 수정하라고 action값과 함께 요청
// 4. reducer가 state값을 수정시, subscribe를 사용해서 수정된 부분을 UI에 업로드합니다.

// 간단하게 이해하기 
// 1. store 만들기
// 2. reducer 만들기
// 3. render 만들기
// 4. subscribe
// 5. action, dispatch
// 6. getState

// Redux 3대 원칙
// single source of truth : 앱 전체에서 상태 관리 저장소는 단일 저장소로 존재한다.
// state is read-only     : 상태를 변경하는 방법은 action을 reducer에 전파하는 것이 유일하다.
// changes are made with pure functions: 상태 변경 로직을 정의하는 리듀서들은 순수함수로 작성되어야 한다.

// Redux는 Flux패턴 사용
// Flux란? -> 단방향 흐름을 가지고 사용자 입력을 기반으로 action을 만들고, Action을 Dispatcher에 전달하여, Store의 데이터를 변경한 뒤, View에 반영하는 단방향의 흐름으로 애플리케이션을 만드는 아키텍처

export default function ReactRedux() {
    return(
        <div>

        </div>
    );
}