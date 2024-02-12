import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Todo from './rstudy/Todo';

// function App3 () {

  
//   return(
//     <div>
//       메인입니다.
//     </div>
//   );
// }

// function App2 ({setPage}) {

//   const [login, setLogin] = useState({
//     email: "",
//     password: ""
//   });

//   const {email, password} = login;

//   const onChange = (e) => {
//       const {name,value} = e.target;
//       setLogin({
//           ...login,
//           [name]: value
//       })
//   }

//   const [user, setUser] = useState([]);
//   const navigate = useNavigate();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setPage(true);
//     axios.get("https://8141bf93-5d2c-4c21-8e3e-247f0a3aed60.mock.pstmn.io", {
//         email,
//         password
//     }).then((res) => {
//         setUser(res.data);
//         alert("로그인이 되었습니다.")
//         document.location.href = '/main' // 방법 2
//         navigate('/main') // 방법 3
//     }).catch((err) => {
//         console.log(err);
//     })
// }
  
//   return(
//     <div>
//       <div>
//             현재는 로그인 하는 부분 입니다.
//             <div>
//                 <input type="email" placeholder="이메일" onChange={onChange} name="email" value={email}/>
//                 <input type="password" placeholder="비밀번호" onChange={onChange} name="password" value={password}/>
//                 <button onClick={onSubmit}>로그인</button>
//             </div>
//         </div>
//     </div>
//   );
// }


function App() {



  return (  
    <>
      <h1>안녕하세요.</h1>

    </>
  );
}

export default App;
