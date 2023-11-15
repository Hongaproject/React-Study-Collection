// 컴포넌트는 함수형태로 작성 가능, 클래스형태로도 작성 가능.
// 리액트는 XML의 형식 값을 변환이 가능한데 이를 JSX라고 합니다.
// 컴포넌트는 일종의 UI 조각이 되며 재사용성이 좋다.

import Wrapper from "./Wrapper";
import Props from "./props";

function Test() {
    const name = '호랑이'; // JS값 사용하려면 {}로 감싸서 보여준다.
    const style = { // jsx에서 style작성시 background-color이 아닌 backgroundColor처럼 camelCase형태로 네이밍 해야함.
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24, // 기본 단위 px
        padding: '1rem' // 다른 단위 사용 시 문자열로 설정
    }
    return(
        <Wrapper
            // 이렇게 Wrapper로 감싸게 된다면 처음에는 내용이 보여지지 않는다. 감싸줬을때 내용을 보여주려면 children을 이용해야한다.
        > 
            <div style={style}>{name}</div>
            <Props name="어흥" color="red" isSpecial
                // 값을 전달해주려면 props를 사용하면 됩니다. name과 color를 내보냈으니
            /> 
        </Wrapper>
    )
  }
  
  export default Test;