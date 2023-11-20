import React from 'react';

function CreateUser({ name, hobby, onChange, onCreate }) {

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
      />
      <input
        name="hobby"
        placeholder="취미"
        onChange={onChange}
        value={hobby}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUser;
