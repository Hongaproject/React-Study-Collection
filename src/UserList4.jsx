function User ({user, onRemove, onToggle}) {
    return(
        <div>
            <span style={{
                cursor: 'pointer', color: user.active ? 'green' : 'black'}}
                onClick={()=>onToggle(user.id)}
                >{user.username}</span>
                <span>({user.email})</span>

            <button onClick={()=>onRemove(user.id)}>삭제</button>
        </div>
);
}

function UserList4 ({users, onRemove , onToggle, marginLeft}) {
    return(
        <div style={{marginLeft}}>
            {users.map(user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />))}
        </div>
    );
}

export default UserList4;