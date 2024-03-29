import React from 'react';
import HookApp from './component/reacthook/HookApp';
import Main from './todolist/Main';

function App() {

  return (
    <div>
      {/* 23년 11월 12일(일) 부터 할 부분입니다.
      기초가 중요하다고 생각하여 props 부터 카운터 및 모달창 만들기 등을 할 예정입니다.

      리액트란 자바스크립트 라이브러리이며 SPA를 지원하고 CSR로 동작을 합니다. 컴포넌트 사용 및 가상 돔을 이용 할 수 있습니다.
      컴포넌트를 사용해서 재사용성과 유지보수가 좋으며 라이브러리이다 보니 프레임워크와 라이브러리의 혼용성이 좋다.

      자바스크립트는 UI를 구성한 뒤 특정 DOM(element)를 선택하여 원하는 이벤트를 발생시킵니다.
      다른 프레임워크들은 자바스크립트 특정값이 변하면 특정 DOM의 속성이 바뀌도록 연결을 하여 업데이트를 진행시키게 되어있습니다.
      하지만 리액트는 상태가 바뀌었을때 그상태에 따라 DOM을 어떻게 업데이트를 할지가 아니라 다시 만들어서 보여주자라는 생각에서 시작이 되습니다. 
      그래서 virtual DOM을 사용하기로 했고 리액트가 탄생되게 되었습니다.  */}
      
      <div>
        {/* <HookApp /> */}
        <Main />
      </div>
    </div>
  );
}

export default App;
