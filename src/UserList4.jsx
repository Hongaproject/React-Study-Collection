function User ({user}) {
    return(
        <div>
            <span>{user.username}</span><span>({user.email})</span>
        </div>
);
}

function UserList4 ({users, marginLeft}) {
    return(
        <div style={{marginLeft}}>
            {users.map(user => (<User user={user} key={user.id}/>))}
        </div>
    );
}

export default UserList4;