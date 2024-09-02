
// Context API란 -> 리액트는 props를 통해 데이터를 전달해줍니다. 하지만 props를 너무 많이 사용한다면 복잡도가 증가됩니다. 이를 해결하기 위해 사용합니다. props drilling을 방지할 수 있다.
// props를 사용하지 않고 자식에게 값을 전달시킬수 있습니다. 

import { createContext } from "react";

export default function Context () {
    // 원래는 이렇게 props를 전달해서 사용합니다.
    return(
        <div>
            <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
        </div>
    );
}

const HelloLicat = (props) => {
    console.log(props)
    return (
      <div>
        <h2>{props.value.id}</h2>
        <strong>{props.value.name}</strong>
        <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
      </div>
    );
  };
  
  const HelloLicatTwo = (props) => {
    return (
      <div>
        <h2>Two : {props.value.id}</h2>
        <strong>Two : {props.value.name}</strong>
      </div>
    );
  };

// context API 사용하기.
const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

export function Context2 () {
    // 원래는 이렇게 props를 전달해서 사용합니다.
    return(
        <div>
            <div>
                <HelloLicat2 value={{ name: "gary", id: "garyIsFree" }} />
            </div>
            
            <UserInfo.Provider value={{ name: "Licat", id: "ImLion" }}>
                <HelloLicat />
            </UserInfo.Provider>
        </div>
        
    );
}

const HelloLicat2 = () => {

    return (
        <UserInfo.Consumer>
          {(value) => (
            <div>
              <h2>{value.name}</h2>
              <strong>{value.id}</strong>
              <HelloLicatTwo2/>
            </div>
          )}
        </UserInfo.Consumer>
      );
};

const HelloLicatTwo2 = () => {
    return (
        <UserInfo.Consumer>
        {(value) => (
            <div>
            <h2>{value.name}</h2>
            <strong>{value.id}</strong>
            </div>
        )}
        </UserInfo.Consumer>
    );
};