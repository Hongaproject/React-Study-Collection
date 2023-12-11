import { createGlobalStyle } from "styled-components";
import Mold from './Mold';
import ContentHead from './ContentHead';

const GlobalStyle = createGlobalStyle`
    body{
        background: #e9ecef;
    }
`

function Main () {
    
    // 투두리스트 제작하기 토이 프로젝트로 간단하게 진행을 할 것
    // 프로젝트에는 사이드와 토이가 있는데 수익여부를 따지는 뜻이다. 수익이 나게끔 한다 - 사이드, 간단하게 내가 하고 싶은 것 제작 - 토이
    // 프로젝트 시작 전에 화면 구상을 미리 해야함. 미리 구상을 하면 시간 단축을 할 수 있음.
    // 투두리스트면 배경화면, 내용 보여주는 화면으로 크게 나타 낼 수 있고
    // 컴포넌트로 세분화 시키면 뒷 배경, 내용 보여주는 메인, 메인에서 날짜 날씨등 보여주는 헤드부분, 내용보여주는 섹션부분, 내용 삭제부분, 내용 추가부분
    // 등등으로 나눌수있습니다.

    // Main부분은 배경색상 및 내용을 보여주게 해주는 컴포넌트이다.
    // react-icons와 styled-components라이브러리를 사용 할 것이다.
    // 전체 배경은 styled-components를 사용해서 스타일을 지정해 줄것

    return(
        <div>
            <GlobalStyle />
            <Mold>
                <ContentHead />
            </Mold>
        </div>
    );
}

export default Main;