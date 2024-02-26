function Redux () {

    // useReducer와 Redux와 차이
    // useReducer는 Context API와 함께 사용한다면 Redux의 기능을 구현 할 수 있다.

    // 우선 useReducer은 내장 함수이고 Redux는 외부 라이브러리이다. 
    // Redux는 동기적 useReducer은 비동기적
    
    // useReducer은 store이 없어 로컬 상태관리로 사용하고
    // Redux는 store을 통해 관리를 하고 전역상태 관리에 사용합니다.

    // https://ko.redux.js.org/introduction/why-rtk-is-redux-today/

    // 설치 
    // npm install @reduxjs/toolkit

    // 사용이유 toolkit
    // redux의 환경 설정이 불편 - 여러 라이브러리 다운받아 사용해야함  \
    // 보일러플레이트 코드를 너무 많이 사용함. -> Flux 패턴

    // https://velog.io/@andy0011/Flux-%ED%8C%A8%ED%84%B4%EC%9D%B4%EB%9E%80
    // Flux 패턴 - 리덕스 공부했는데 모르면 안되는 것
    // 클라이언트 사이드 웹 애플리케이션을 만들기 위해 사용하는 패턴을 뜻합니다.
    // 원래는 MVC - 모델 뷰 컨트롤러로 된 패턴을 사용했는데 
    // 모델은 데이터를 저장하고 컨트롤러를 사용하요 모델의 데이터를 관리 합니다.
    // 모델 데이터가 변경시 뷰로 전달되어 사용자에게 보여집니다.
    // 하지만 사용자사 뷰를 통해서 데이터를 입력시 뷰가 모델을 업데이트 할 수 있습니다.
    // 이것을 양방향 데이터 흐름이라고 합니다. 규모가 커지면 복잡해집니다.
    
    // 그래서 단순화하기 위해 단방향 데이터 흐름을 가진 Flux패턴을 개발하게 되었습니다.
    // Flux는 사용자 입력을 기반으로 Action을 만들고 Action을 Dispatch에 전달하여 store의 데이터를 변경시키고 view에 반영하는 단방향 데이터 흐름입니다.
    
    return(
        <div>

        </div>
    );
}

export default Redux;