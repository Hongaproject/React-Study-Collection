import React from 'react';

function CreateUser({ name, hobby, onChange, onCreate }) {

  // useMemo는 결과값을 재사용 함 useCallback은 특정함수를 새로 안만들고 재사용 하고 싶을때 사용함.
  // React.memo는 리렌더링 성능최적화를 할 수 있게 해줌 리렌더링이 필요한 상황서만 리렌더링 가능하게 설정 가능.

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

export default React.memo(CreateUser); 
