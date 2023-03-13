function UserList ({marginLeft}) {
    const users = [
        {
            id: 1,
            username: 'Tom',
            email: 'Tom@gmail.com'
        },
        {
            id: 2,
            username: 'Sujan',
            email: 'Sujan@gmail.com'
        },
        {
            id: 3,
            username: 'Minjae',
            email: 'Minjae@gmail.com'
        }
    ]
    return(
        <div style={{marginLeft}}>
            <div>
                <span>{users[0].username}</span><span>({users[0].email})</span>
            </div>
            <div>
                <span>{users[1].username}</span><span>({users[1].email})</span>
            </div>
            <div>
                <span>{users[2].username}</span><span>({users[2].email})</span>
            </div>
        </div>
    );
}

export default UserList;