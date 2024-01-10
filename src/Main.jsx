import { Cookies } from "react-cookie";

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

  return (  
    <div>
      
    </div>
  );
}
export default Main;
