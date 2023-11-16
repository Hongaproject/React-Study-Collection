import React, { useRef, useState } from 'react';

function InputSample() {
  
  // input값을 하단에 나타나고 버튼 클릭시 초기화되게 함
  // 주로 input 기본은 type명시 placeholder로 설명 onchange, value, name를 사용해 값을 추출해냄.

  const [text, setText] = useState("");

  const onChange = (e) => { // input e.target은 DOM을 가르킨다.
    setText(e.target.value); // value값은 e.target.value이 값을 조회하면 input에 입력한 값을 나타낸다.
  }

  const onReset = () => {
    setText("");
  }

  // 번외
  const [text1, setText1] = useState({
    title: "",
    content: "",
  });

  const inputName = useRef();
  
  const {title, content} = text1; // 구조분해할당을 사용해 코드를 간략하게 사용함.

  const onChange1 = (e) => {
    const {name, value} = e.target // name을 사용하는 이유는 input에 맞는 값을 state에 삽입해야하므로 사용 함.
    setText1({
      ...text1,
      [name]: value 
      // []로 하는 이유는 문자열 name자체가 들어가는거라 값에 따라 다른 key값을 받아오기 때매 
      // useState값이 여러 개여도 상관 없다.
    });
  };

  const onReset1 = () => {
    setText1({
      title: "",
      content: ""
    });
    inputName.current.focus();
  }

  return (
    <div>
      <input type="text" placeholder='테스트 입니다.' onChange={onChange} value={text}/>
      <button onClick={onReset}>reset</button>
      <div>
        <span>: {text}</span>
      </div>

      <input type="text" name="title" placeholder='테스트 입니다.' onChange={onChange1} value={title} autoFocus ref={inputName}/>
      <input type="text" name="content" placeholder='테스트 입니다.' onChange={onChange1} value={content} />
      <button onClick={onReset1}>reset</button>

    </div>
  );
}

export default InputSample;
