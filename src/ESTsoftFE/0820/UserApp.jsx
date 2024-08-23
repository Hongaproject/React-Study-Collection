import { useState } from "react";

export default function UserApp () {

    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ]

    return(
        <div>
            <h1>유저 이름 목록</h1>
            <UserList users={users} />
        </div>
    );
}

const UserList = ({users}) => {
    return(
        <div>
            {
                users.map((user) => (
                    <User key={user.id} user={user} />
                ))
            }
        </div>
    );
}

const User = ({user}) => {

    const [isActive, setActive] = useState(false);

    const onClick = () => {
        setActive(!isActive);
    }

    return(
        <ul>
            <li onClick={onClick}>{user.name}</li>
            <div>
                {
                    isActive ? 
                    <div>
                        <h4>Email : {user.email}</h4>
                        <h4>Job : {user.job}</h4>
                    </div>
                        : null
                }
            </div>
        </ul>
    );
}