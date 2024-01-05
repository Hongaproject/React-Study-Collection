import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App3 () {

  
  return(
    <div>
      메인입니다.
    </div>
  );
}

function App2 ({setPage}) {

  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const {email, password} = login;

  const onChange = (e) => {
      const {name,value} = e.target;
      setLogin({
          ...login,
          [name]: value
      })
  }

  const [user, setUser] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(true);
    axios.get("https://8141bf93-5d2c-4c21-8e3e-247f0a3aed60.mock.pstmn.io", {
        email,
        password
    }).then((res) => {
        setUser(res.data);
        alert("로그인이 되었습니다.")
        document.location.href = '/main'
    }).catch((err) => {
        console.log(err);
    })
}
  
  return(
    <div>
      <div>
            현재는 로그인 하는 부분 입니다.
            <div>
                <input type="email" placeholder="이메일" onChange={onChange} name="email" value={email}/>
                <input type="password" placeholder="비밀번호" onChange={onChange} name="password" value={password}/>
                <button onClick={onSubmit}>로그인</button>
            </div>
        </div>
    </div>
  );
}

function App() {

  const [isPage, setPage] = useState(false);
  
  // const onClick = () => {
  //   setPage(!isPage);
  // }

  return (  
    <>
      {/* 안녕하세요. <button onClick={onClick}>클릭</button> */}
      {
        isPage ? <App2 /> : <App3 />
      }
      <Route path="/" element={<App2 setPage={setPage} />} />
      <Route path="/main" element={<App3 />} />
    </>
  );
}
export default App;
