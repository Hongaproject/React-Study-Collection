import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import TestAxios from "./TestAxios";
import axios from "axios";

const cookies = new Cookies();
export const setCookie = (name, value, option) => { // 쿠키 저장하는 함수 key, value, option 세 가지 파라미터를 받음
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name) => { // 쿠키 가져오는 함수
  return cookies.get(name);
};
export const removeCookie = (name, option) => { // 쿠키 삭제하는 함수
  return cookies.remove(name, { ...option });
};
// // setCookie는 option이 따로 있는데 path, expires, httpyOnly등이 있다. 

function Main() {
  // 쿠기 저장 하는 법
  // const checkCookie = () => {
  //   // 방법 1
  //   const expires = new Date()
  //   setCookie('testCookie', true, {expires}) // set(name, value, { ...option }); 이 부분을 작성한 내용

  //   // 방법 2
  //   const time = 3600; //1시간
  //   const expires1 = new Date(Date.now() + time * 1000);
  //   setCookie('testCookie', true, {expires1})
  //   setTimeout(() => {
  //     // 시간을 걸어서 사용이 가능하다.
  //   })
  // }

  // useEffect(() => {
  //   if(cookies.testCookie == 'true'){
  //     console.log("쿠키값을 이행함.");
  //   }
  // }, []);

  // console.log(cookies);

  const [user, setUser] = useState({ // 이부분서 id와 pw부분을 받음
    id: "",
    password: "",
    nickname: ""
  })

  const {nickname, id, password} = user;

  const onChange = async (e) => { // 입력받는 부분
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  }
  
  // 로그인
  const clickLogin = async () => {
    const config = await axios({
      id,
      password,
      nickname,
      method: 'post',
      url: 'http://13.124.168.202:7777/api/v1/users/login',
      data: user, // useState부분에서 id값과 password값을 user로 받아옴
    })
    const { data } = config; // 총 내용을 data로 받아서 연결을 시킴.
    setCookie('accessToken', data.token);
  }

  // 로그아웃
  const clickLogout = async () => {
    removeCookie('accessToken')
  }

  return (  
     <div>
      {/* <button onClick={checkCookie}>(버튼입니다)cookie저장하기</button> */}
      <input
        onChange={onChange}
        name="email"
        type="text"
        placeholder="Enter Ur Email"
      />
      <input
        onChange={onChange}
        name="pw"
        type="password"
        placeholder="Enter Ur pw"
      />
      <button onClick={clickLogin}>LOGIN</button>
      <button onClick={clickLogout}>LOGOUT</button>
    </div>
  );
}
export default Main;
