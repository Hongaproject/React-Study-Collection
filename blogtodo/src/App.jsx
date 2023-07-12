import React from 'react';
import './App.css';
import Study from './Study';
import styled from 'styled-components';
import Wrapper from './Wrapper';

function App() {

  const react = {
    color: 'pink'
  }

  const Test = styled.div`
    color: aquamarine;
  `
  
  return (
    <Wrapper>
      <h1 color='red'>리액트란?</h1>
      <h3 style={react} >페이스북에서 만든 자바스크립트 UI 라이브러리이다. 특징으로는 SPA CSR virtual DOM이 있다.</h3>
      <Study name="Component" color="aqua"/>
      <Test>
        <h1>리액트는 컴포넌트를 사용하여 유지보수가 좋으며 SPA를 이용하여 메모리 관리를 해주고 커뮤니티가 방대하다는 뜻은 안정성이 좋다는 것과 오류에 대한 정보를 얻을수있다.</h1>
      </Test>
    </Wrapper>
  );
}

export default App;
