import React, {useRef, useState} from 'react';
import Counter from './Counter';
import CreateUserList1 from './CreateUserList1';
import HelloWorld from './HelloWorld';
import InputText from './InputText';
import UserList1 from './UserList1';
import UserList2 from './UserList2';
import UserList3 from './UserList3';
import UserList4 from './UserList4';
import Wrapper from './Wrapper';

function App() {
  const [text, setText] = useState({
    username: '',
    email: ''
  });

  const {username, email} = text;

  const onChange = e => {
    const {name, value} = e.target;
    setText({
      ...text, 
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'aaa',
      email: 'aaa@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'bbb',
      email: 'bbb@gmail.com',
      active: false
    },
    {
      id: 3,
      username: 'ccc',
      email: 'ccc@gmail.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    
    setText({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user));
  }

  return (  
    <div>
      <Wrapper>
        <HelloWorld name="2일차 입니다." color="aqua" backgroundColor="black" padding="1rem"/>
      </Wrapper>
      <Counter marginLeft="20px"/>
      <br />
      <InputText marginLeft ="20px"/>
      <br />
      <UserList1 marginLeft="20px"/>
      <br />
      <UserList2 marginLeft="20px"/>
      <br />
      <UserList3 marginLeft="20px"/>
      <br />
      <CreateUserList1 marginLeft="20px" 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList4 users={users} onRemove={onRemove} onToggle={onToggle} marginLeft="20px"/>
    </div>
  );
}
export default App;
