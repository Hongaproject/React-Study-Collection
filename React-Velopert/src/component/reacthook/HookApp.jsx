import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function HookApp() {
    // reacthook폴더에 있는 컴포넌트 내용을 보여주는 곳 입니다.
    const [inputs, setInputs] = useState({ // 이렇게 사용시 useState 한 개 만 사용하여 여러개의 상태관리 가능.
      name: '',
      hobby: ''
    });

    const { name, hobby } = inputs; // 비구조할당을 사용하여 코드를 사용하기 쉽게 만들어줌.

    const onChange = e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value // 불변성을 지켜주기위해 사용함. state는 불변성을 지켜줘야하기 때문. 

      });
    };

    const [users, setUsers] = useState([ // 관리를 하기위해 useState를 사용 함.
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
  ]);
  
   // Ref는 컴포넌트서 특정 DOM을 선택 할 때 사용한다.
   // Ref는 DOM선택 말고도 컴포넌트 안에서 조회 및 수정을 할 수도 있다.
  const nextId = useRef(3);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      hobby
    };
    setUsers([...users, user]); 
    // setUsers(users.concat(user));
    // 직접적으로 값을 고치게 되면 불변성을 못지켜주기 때문에 spread연산자를 사용해 줍니다.
    // 불변성을 지켜줘야 하는 이유는 강제로 값을 변화지 렌더링 함수를 사용하지않게 되어 작동이 되지 않습니다.
    // 그래서 보통 spread를 사용합니다. 또는 concat도 사용이 가능합니다. 기존 배열을 수정하지 않고 새로운 원소를 추가하여 새로운 배열을 만들어 줌.

    setInputs({ // 첨에 CreateUser부분에서 등록 버튼을 눌렀을때 초기화가 잘 되는지 확인을 하는 부분.
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
