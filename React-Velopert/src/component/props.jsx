
function Props(props) {
    return (
        <div style={{color: props.color}}>
            {/* 이렇게 꺼내서 사용이 가능합니다. */}
            {props.name}
        </div>
    );
  }

  //쓰이는 곳에서 값을 정한다 = props(부모)
  //쓰임 당하는 곳(Wrapper.js)에서 값을 정한다 = children

  function Props({name, color, isSpecial}) { // 비구조할당 문법을 사용시 코드가 더 간결하게 작성이 가능합니다.
    return (
        // style부분에 {} 2번 사용이유는 1개는 jsx문법용 하나는 객체리터럴 용이라 2개를 사용해야지 적용이 됩니다.
        // https://ko.legacy.reactjs.org/docs/jsx-in-depth.html 공식문서에 자세히 나와있습니다.
        <div style={{color}}> 
            {/* 주로 삼항연산자 조건문은 특정 조건이 있을때 사용이 됩니다. 단순한 특정이라면 &&와 ||를 사용해서 처리를 하는것이 간편합니다. */}
            {/* &&는 true true = true 빼고 모두 false를 나타냅니다. ||는 false flase = flase 빼고 모두 true를 나타냅니다. */}
            {/* 이렇게 꺼내서 사용이 가능합니다. */}
            {isSpecial ? <b>*</b> : null}{isSpecial && <b>*</b>} {name}
        </div>
    );
  }
  
  export default Props;