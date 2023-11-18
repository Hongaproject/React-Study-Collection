import React, { useRef } from 'react';
import UserList from './UserList';

function HookApp() {
    // reacthook폴더에 있는 컴포넌트 내용을 보여주는 곳 입니다.

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

  }

  nextId.current += 1;

  return (
    <div>
      <br />
      <UserList users={users}/>
    </div>
  );
}

export default HookApp;
