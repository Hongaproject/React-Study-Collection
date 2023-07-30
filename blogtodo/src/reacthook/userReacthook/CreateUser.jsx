function CreateUser({onChange, name, email, onCreate}){ //직접 관리하지 않고 Userlist에서 props로 값을 받아온다.
  return(
      <div>
          <input name="name" placeholder="이름" onChange={onChange} value={name}/>
          <input name="email" placeholder="이메일" onChange={onChange} value={email} />
          <button onClick={onCreate}>등록</button>
      </div>
  );
}

export default CreateUser;