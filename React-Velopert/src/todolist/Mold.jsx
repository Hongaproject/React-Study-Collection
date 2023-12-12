import styled from "styled-components";

const MoldStyle = styled.div`
    width: 512px;
    height: 768px;

    margin: 0 auto;
    background: #fff;
    border-radius: 16px; 
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column; // inline으로 나타내는 것을 block처럼 나타내준다. 

    position: relative; 
    margin-top: 96px;
    margin-bottom: 80px;
`

function Mold ({children}) {
    // 배경부분 가운데에 내용을 보여주기 위한 틀 children을 사용해서 내용을 보여줄 것
    // children 사용시 컴포넌트로 감싸주고 그 안에 컴포넌트를 넣어서 사용이 됩니다.

    return(
        <MoldStyle>
            {children}
        </MoldStyle>
    )
};

export default Mold;