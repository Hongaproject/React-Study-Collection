import React, { useEffect } from 'react';

// 예를 들어 사용을 함.

function User({user, onRemove, onToggle}) { 
    // 컴포넌트로 재사용성을 높히려고 할 때 렌더링 하는 부분과 화면에 보여지는 부분을 따로 사용한다면 재사용성에 도움이 된다.

    useEffect(() => { 
        // 마운트(처음 화면에 나타날때), 언마운트(화면서 사라질 때), 업데이트(특정 부분이 변경될 때)가 나타난다.
        console.log('컴포넌트 화면에 나타남');
        return() => {
            console.log('컴포넌트 화면에 사라짐');
        }
    }, []); // deps 값을 안넣으면 1회만 실행 넣으면 그 부분이 변경 될 때 마다 렌더링

    // 마운트시 외부 API 요청 및 라이브러리 사용 setInterval, Timeout등 작업 예약을 할 수 있음
    // 언마운트시 setInterval, Timeout등 작업한 내용 clear 하기 
    
    return(
        <div>
            {/* HookApp에서 users부분 active를 받아와서 색상을 변하게 설정함. */}
            <b
            style={{
            cursor: 'pointer',
            color: user.active ? 'green' : 'black'
            }}
            onClick={() => onToggle(user.id)}
        >
            {user.name}
            </b>
            {user.hobby}
            {/* user.id 값을 이용해서 삭제를 하게 만들음. */}
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({users, onRemove, onToggle}) {
    
  return (
    <div>
        <div>
            {/* 배열을 꺼내서 쓰려면 1차원적으로 이렇게 사용이 된다. 컴포넌트로 재사용성을 높히려면 컴포넌트를 이어서 사용을 해야 한다.*/}
            {/* {users[0].name} {users[0].hobby} */} 
            {/* <User user={users[0]} /> */}
            {
                // map으로 배열을 렌더링 시켜줍니다.
                // 이렇게 배열을 렌더링하는 부분과 화면에 출력하는 부분을 따로 작성하게 되면 재사용성에 좋습니다.
                users.map((user) => (
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                ))
            }
        </div>
    </div>
  );
}

export default UserList;
