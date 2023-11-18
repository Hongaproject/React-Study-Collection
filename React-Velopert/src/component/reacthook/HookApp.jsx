import React from 'react';
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

  return (
    <div>
      <br />
      <UserList users={users}/>
    </div>
  );
}

export default HookApp;
