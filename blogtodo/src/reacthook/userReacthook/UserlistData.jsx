import { useEffect } from "react";
import styled from "styled-components";

function User({user, onRemove, onToggle}) { //User이라는 컴포넌트 생성 
    
    useEffect(() => {
        // console.log('컴포넌트가 화면에 나타남');
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
        //   console.log('컴포넌트가 화면에서 사라짐');
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
      }, [user]);
      
    return(
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'black'
                }}
                onClick={()=> onToggle(user.id)}
            > 
                {user.name}
            </b>
            {/* //이름에 마우스를 올리면 포인트커서로 바뀌게 만들고 색상 바꾸기 */}

            <span>({user.email})</span>
            <button onClick={()=> onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserlistData({users, onRemove, onToggle}) {

    const Body = styled.div`
        padding: 20px;
    `

    return(
        <Body>
            <div>
                {/* <h3>{users[0].name} ({users[0].email})</h3> */}
                {/* 초반 배열 생성법 */}
                {/* <User user={users[0]}/>
                <User user={users[1]}/>
                <User user={users[2]}/> */}
                <br/>
                {users.map((user)=>(
                    <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
                    //<Uset안에 user= 는 User컴포넌트에 들어가는 user의 인자를 의미
                    // user={} 안에 내용은 users 배열의 각 원소값을 의미합니다.
                ))}
            </div>  
        </Body>
    );
}

export default UserlistData;