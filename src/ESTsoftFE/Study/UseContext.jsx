
// useContext란? -> 리액트 훅에 있는 기능으로 16.8버전에 도입되었습니다.
// Context API와 useContext 차이 -> 둘 다 상태관리를 전역적으로 관리하고 전달하기 위해 사용 된다.

import { useContext } from "react";
import { createContext } from "react";

// Context API -> 전역 상태를 정의하고 전달하기 위한 구조적인 틀을 제공
// useContext -> Context API에서 생성된 값을 쉽게 가져오기 위한 훅

const UserInfo = createContext({name: "hong", age: "27"});

export default function UseContext () {

    const {name, age} = useContext(UserInfo);

    return(
        <div>
            <h2>{name}</h2>
            <strong>{age}</strong>
            <HelloLicat/>
        </div>
    );
}

const HelloLicat = () => {
    const { name, age } = useContext(UserInfo);
    return (
      <div>
        <h2>{name}</h2>
        <strong>{age}</strong>
        <HelloLicatTwo/>
      </div>
    );
  };
  
  const HelloLicatTwo = () => {
    const { name, age } = useContext(UserInfo);
    return (
      <div>
        <h2>{name}</h2>
        <strong>{age}</strong>
      </div>
    );
  };