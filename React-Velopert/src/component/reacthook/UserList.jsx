import React from 'react';

// 예를 들어 사용을 함.

function User({user}) { 
    // 컴포넌트로 재사용성을 높히려고 할 때 렌더링 하는 부분과 화면에 보여지는 부분을 따로 사용한다면 재사용성에 도움이 된다.
    return(
        <div>
            {user[0].name} {user[0].hobby}
        </div>
    );
}

function UserList() {
    
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
        <div>
            {/* 배열을 꺼내서 쓰려면 1차원적으로 이렇게 사용이 된다. 컴포넌트로 재사용성을 높히려면 컴포넌트를 이어서 사용을 해야 한다.*/}
            {/* {users[0].name} {users[0].hobby} */} 
            {/* <User user={users[0]} /> */}
            {
                // map으로 배열을 렌더링 시켜줍니다.
                // 이렇게 배열을 렌더링하는 부분과 화면에 출력하는 부분을 따로 작성하게 되면 재사용성에 좋습니다.
                users.map((user) => (
                    <User user={user} key={user.id}/>
                ))
            }
        </div>
    </div>
  );
}

export default UserList;
