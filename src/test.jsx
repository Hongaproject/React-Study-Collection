// React란?
// 리액트는 사용자 인터페이스를 제작하기 위한 JavaScript 라이브러리이다.

// 특징으로 
// 컴포넌트로 개발을 진행을하고
// virtual DOM을 사용해서 성능을 향상시키고
// 라이브러리라 다른 프레임워크나 라이브러리와 혼용성이 좋다
// 공식문서 및 방대한 커뮤니티가 생성이 되어있어 접근성이 좋다.

// 컴포넌트
// 컴포넌트는 레고 조각마냥 조립해서 제작하는 기법을 뜻하며
// 컴포넌트가 나뉘어있어 개발에 용이하고 유지보수가 좋으며 가독성과 재사용성이 좋다.

// virtual DOM
// 가상돔은 실제돔의 변화를 최소화 해주는 역할을 합니다.
// 가상돔이 없이 20번의 변화가 생겼다고 가정하면 실제돔은 20번의 렌더링을 진행해야합니다. 이러면 성능이 저하 될 수 있습니다.
// 하지만 가상돔을 사용하면 20번의 변화를 1개로 묶어 실제돔에게 전달해줍니다. 실제돔은 1번의 렌더링만 실행이 되고 20번의 변화를 보여줍니다.
// 이렇게 실제돔의 변화를 최소화 시켜주는 역할을 합니다.

// 재조정
// 가상돔은 변경 전과 변경 후의 내용을 비교하여 변경된 내용만 실제 돔으로 전달해주는 것을 재조정이라고한다.

// virtual DOM 갱신법
// setState()메소드를 실행한다.
// 전역 상태관리 라이브러리를 사용하면 store가 변경 될 때 마다 render()를 호출하여 갱신 시킨다.

// SPA, CSR, SSR 설명
// SPA는 싱글 페이지 어플리케이션이며 전체페이지를 다시 로드할 필요없이 변경된 부분들만 동적으로 업데이트하는 어플리케이션 입니다. 새로고침이 일어나지않아 사용자에게 보기 좋은 페이지를 제공해줍니다.
// CSR는 클라이언트 측 브라우저에서 JavaScript를 사용하여 서버에서 필요한 데이터를 가져오고
// SSR은 서버에서 사용자에게 보여줄 페이지를 모두 미리 구성한 뒤 페이지를 렌더링을 하는 방식이며, 
// 이러한 방식은 페이지가 처음 로드될 때 컨텐츠가 검색 엔진에 표시되어 더 빠른 로드 시간과 더 나은 SEO를 제공합니다. 

// csr, ssr 추가설명
// 브라우저를 접속하면 서버에서 빈 html를 다운받고 이후 자바스크립트를 다운로드 받아 서버에서 필요한 데이터를 가져오고 
// 클라이언트 측에서 동적으로 렌더링을 하는 것을 의미합니다.
// 빈 html를 받아오고 자바스크립트로 데이터를 받기 때문에 SEO(검색 엔진 최적화)가 어렵습니다. 이를 해결하기 위해 SSR을 사용합니다.

// CSR과 다르게 서버에서 렌더링을 진행하며 브라우저에 접속을 하면 서버에서 꽉찬 html파일을 다운로드 한다음 클라이언트에게 전달을 해준다.
// CSR보다 초기 로딩속도가 빠르며 로딩시에 꽉찬 html파일을 다운로드 받기 떄문에 더 좋은 SEO(검색엔진최적화)를 제공합니다.

// 이러한 차이점 때문에 csr은 ssr보다 초기 로딩 속도가 느리며 프로젝트의 크기가 커질수록 초기 로등속도 차이가 나타나게 됩니다.
// 페이지 이동시에는 csr이 ssr보다 더 부드럽다고다는 장점이 있습니다.
//  csr은 처음 로딩때 자원을 다 받아오고 ssr은 페이지 이동할 떄 마다 서버에서 렌더링이 일어나기 때문에 화면 깜빡임이 있습니다.

// https://friedegg556.tistory.com/180             SPA 설명 
// https://velog.io/@rookieand/CSR-SSR-SPA-MPA-%EC%9D%B4%EA%B2%83%EB%93%A4%EC%9D%80-%EB%AD%98%EA%B9%8C#1-spa-single-page-application
// https://engineerinsight.tistory.com/325
// https://babycoder05.tistory.com/entry/%EB%A6%AC%EC%95%A1%ED%8A%B8%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EC%9D%B4%EC%9C%A0-SPA-CSR-SSR

// React hooks?
// 16.8 버전에 도입된 기능이며 클래스 컴포넌트에서 사용되던 라이프사이클, 상태관리를 사용할 수 있게 되었다.

// 클래스, 함수 컴포넌트 차이
// 클래스는 state와 props을 사용하기 위해 this를 사용하고
// 함수는 state를 react hook으로 사용이 가능하고 props는 직접적으로 사용이 가능하다.
// 함수형이 클래스보다 선언이 간편하고 메모리 자원을 덜 사용한다.

// JSX
// 자바스크립트에 XML을 추가하여 HTML처럼 표현 할 수 있는 확장 문법 사용시 개발에 용이하고 가독성이 좋다.

// state, props
// state 컴포넌트서 사용이되며 관리할 수 있는 상태값, props는 부모 컴포넌트에서 자식컴포넌트로 데이터를 전달해주는 읽기 전용 데이터

// React lifecycle
// 마운트, 업데이트, 언마운트가 있다. 최초생성 마운트, 업데이트 render호출 컴포넌트 삭제시 

// setState 사용이유
// state는 불변성을 유지해야함 강제로 변경시 함수서 render를 호출하지 않아 렌더링이 되지않는다. 

// React.memo, useMemo, useCallback
// React.memo는 props값을 비교하여 판단하여 재사용을함.
// useMemo는 메모제이션된 값을 반환한다. 이전 값을 저장하여 같은 값 반복을 막을수있다. 특정 결과 값 재사용
// useCallback은 메모제이션된 함수를 반환한다. 특정 함수 재사용.

// 이벤트 리스너
// 특정 이벤트에 대한 트리거를 걸어준다. 그 이벤트가 작동이 되었을 때 브라우저는 등록된 이벤트를 호출합니다.

// 리액트 온클릭은 해당 요소에 클릭 이벤트를 걸어주는 이벤트 리스너입니다.
// 클릭으로 이벤트를 실행시키면 브라우저가 온클릭에 등록된 함수에게 이벤트객체를 전달하면서 작동하는 원리입니다.

// event.target
// 부모로부터 이벤트가 발생되는 자식의 위치나, 내가 실행시킨 자식요소 반환

// event.currentTarget
// 이벤트가 부착된 부모의 위치를 반환

// typeScript
// 자바스크립트에 타입을 추가한 자바스크립트 확장 언어이다.

// interface, type
// 둘 다 사용할 내용의 타입을 걸어주는 것인데 사용 법에 차이가있습니다.
// 확장 사용법이 다릅니다 interface - extends  type - &로 확장을 할 수 있고
// interface는 선언적확장이 가능하지만 type은 선언적 확장이 가능하지 않습니다.

// 선언적 확장이란?
// interface에서 같은 이름으로 사용시에 자동으로 내용이 확장되는 것을 뜻합니다.

// Next js란?
// 리액트는 라이브러리이고 넥스트는 프레임워크이다.
// ssr로 동작하고 seo에 좋습니다.

// 장점으로 
// 렌더링 속도가 빠르다
// 타입스크립트가 내장되어있다.
// 추가 설정 없이 웹팩과 바벨이 설정되어있음. 

// 커밋이 잘 되는지 확인용
