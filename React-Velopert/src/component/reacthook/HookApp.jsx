import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function HookApp() {
    // reacthook폴더에 있는 컴포넌트 내용을 보여주는 곳 입니다.
    const [inputs, setInputs] = useState({
      name: '',
      hobby: ''
    });
    const { name, hobby } = inputs;

    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    };

    const users = [ 
      {
          id: 1,
          name: "hongga",
          hobby: "운동"
      },
      {
          id: 2,
          name: "오둥이",
          hobby: "누워있기",
      }
  ]
  
   // Ref는 컴포넌트서 특정 DOM을 선택 할 때 사용한다.
   // Ref는 DOM선택 말고도 컴포넌트 안에서 조회 및 수정을 할 수도 있다.
  const nextId = useRef(3);
  const onCreate = () => {
    
    setInputs({
      name: '',
      hobby: ''
    });
    nextId.current += 1; // sueRef() 사용시 파라미터 넣어주면, 이 값이 기본 값이 됨. (current)
    // 수정시 current값을 수정하거나 조회시 조회를 하면 된다. 
  }

  return (
    <div>
      <br />
      <CreateUser 
        name={name}
        hobby={hobby}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </div>
  );
}

export default HookApp;
