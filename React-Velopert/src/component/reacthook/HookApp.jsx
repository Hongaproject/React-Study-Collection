import UserList from './UserList';
import CreateUser from './CreateUser';
import Effect from './Effect';
import { useCallback, useMemo, useRef, useState } from 'react';

// useMemo, useCallback, React.memo를 사용해서 hook 재사용하는 법 알기
function countActive(users) {
  console.log('활용 사용자 수를 알려줍니다.');
  return users.filter(user => user.active).length; // active 값이 true인 사용자 수를 세어줍니다.
}

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
          hobby: "운동",
          active: true
      },
      {
          id: 2,
          name: "오둥이",
          hobby: "누워있기",
          active: false
      }
  ]);
  
   // Ref는 컴포넌트서 특정 DOM을 선택 할 때 사용한다.
   // Ref는 DOM선택 말고도 컴포넌트 안에서 조회 및 수정을 할 수도 있다.
  const nextId = useRef(3);
  const onCreate = useCallback(() => {
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
  }, [users, name, hobby]);

  const onRemove = useCallback((id) => {
    // 삭제도 추가처럼 불변성을 지키면서 업데이트를 해야한다.
    // id를 삭제하게 해줌.
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback((id) => {
    // 수정도 불변성을 지키면서 업데이트를 시켜야한다.
    // id 값을 비교해서 id 가 다르다면 그대로 두고, 같다면 active 값을 반전시키도록 구현 
    setUsers(
      users.map((user) => (
        user.id === id ? { ...user, active: !user.active } : user
      ))
    )
  }, [users]);

  // useMemo는 특정 결과값을 재사용 할 때 사용하는데 useCallback은 특정 함수를 새로 만들지 않고 재사용 하고 싶을때 사용이 되게 한다.
  // 현재 onCreate ~ onToggle은 컴포넌트가 리렌더링 될 때 마다 새로 만들어짐 
  // 한 번 만든 함수를 재사용 하는것은 중요함  
  // callback사용시 함수 안에 props나 상태가 있다면 deps배열안에 포함시켜야 한다.


  // 할수가 호출 될 때 콘솔로 알려줍니다.
  // 이렇게 사용시 input값이 바뀔 때에도 콘솔에 입력이 되기 때문에 자원낭비가 된다.
  // Memo는 메모이제이션값을 사용하는데 이전 값을 재사용한다는 의미를 가집니다.
  // const count = countActive(users); 
  const count = useMemo(() => countActive(users), [users]);
  // useMemo는 첫번째 부분에 어떤 연산을 정의하고 두번째에서는 deps를 넣어주는데 deps값이 변하게 되면 변경해주고 안변하면 이전 값을 재사용합니다.

  return (
    <div>
      <br />
      <CreateUser 
        name={name}
        hobby={hobby}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <br />
      <Effect />
      <span>활성사용자 수 : {count}</span>
    </div>
  );
}

export default HookApp;
