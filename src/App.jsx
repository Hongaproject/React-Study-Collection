import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App3 () {

  
  return(
    <div>
      테스트 파일 입니다.
    </div>
  );
}

function App2 () {

  
  return(
    <div>
      테스트 파일 입니다.
    </div>
  );
}

function App() {

  const [isPage, setPage] = useState(false);
  
  const onClick = () => {
    setPage(!isPage);
  }

  return (  
    <>
      안녕하세요. <button onClick={onClick}>클릭</button>
      {
        isPage ? <App2 /> : <App3 />
      }
      
    </>
  );
}
export default App;
