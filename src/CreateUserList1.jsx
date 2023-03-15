function CreateUserList1 ({username, email, onChange, onCreate, marginLeft}) {
    return(
        <div style={{marginLeft}}>
            <input name="username" placeholder="이름" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>추가</button>
        </div>
    );
}
export default CreateUserList1;