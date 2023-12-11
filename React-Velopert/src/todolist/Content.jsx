import styled from "styled-components";
import ContentItem from "./ContentItem";

const ContentStyle = styled.div`
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    overflow-y: auto; // overflow-x는 가로내용이 더 길때 y는 세로내용이 더 길때 사용함.
    /* background: gray; // flex 1에 대한 사이즈가 잘 나타나는지 확인용 */
`

    // Mold -> 가운데 흰색 부분
    // Mold의 내용부분을 담당 하여 ContentItem으로 내용을 나타냄
function Content () {

    return(
        <ContentStyle>
            <ContentItem text="프로젝트 생성하기" done={true}/>
            <ContentItem text="컴포넌트 생성 및 스타일링 하기" done={true}/>
            <ContentItem text="기능 구현하기" done={false}/>
        </ContentStyle>
    )
}

export default Content;