
const ReduxFile = () => {

    return(
        <div>
            <h3>리덕스 공부</h3>
            <span>기술 블로그, 노마드코더</span>
            <span>이 파일서는 노마드코더 Redux영상을 보고 공부를 할 것</span>

            Redux : 기본적으로 Javascript application들의 state(상태)를 관리하는 방법
            - React와 많이 사용하면서 유명해졌으나, React에 의존하는 라이브러리는 아님.
            - 이와는 별개로 Angular, Vue.js, Vanilla JS 등 JS 언어내의 여러곳에서 사용가능함.
            
            Redux는 모든 상태의 업데이트를 액션으로 정의, 액션 정보에 기반하여 상태를 업데이트 함.
            상태를 더욱 쉽게 예측가능하게 하여 유지보수 측면에 긍정적인 효과가 있다.

            장점 : 상태관리가 쉽다. 프로젝트가 커질수록 사용하기 좋다.
            단점 : 어렵다. 리덕스를 유용하게 사용하려면 패키지를 추가 해야한다. 
            
            Flux 패턴 : 사용자 입력 기반으로 Action을 만듬, Action을 Dispatcher에 전달하고 store의 데이터를 변경한 뒤, View에 반영합니다.
            원래 MVC모델을 사용했었는데 SPA가 발전이 되면서 웹 애플리케이션이 복잡해져 MVC의 복잡도를 해결하기 위해 Flux 패턴이 나타나게 되었습니다.

            Redux의 3대 원칙
            single source of truth: 앱 전체에서 상태 관리 저장소는 단일 저장소로 존재한다.
            state is read-only: 상태를 변경하는 방법은 action을 reducer에 전파하는 것이 유일하다.
            changes are made with pure functions: 상태 변경 로직을 정의하는 리듀서들은 순수함수로 작성되어야 한다.
            
        </div>
    );
}

export default ReduxFile;