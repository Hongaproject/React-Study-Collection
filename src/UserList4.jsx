function User ({user, onRemove}) {
    return(
        <div>
            <span>{user.username}</span><span>({user.email})</span>
            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
);
}

function UserList4 ({users, onRemove ,marginLeft}) {
    return(
        <div style={{marginLeft}}>
            {users.map(user => (<User user={user} key={user.id} onRemove={onRemove} />))}
        </div>
    );
}

export default UserList4;