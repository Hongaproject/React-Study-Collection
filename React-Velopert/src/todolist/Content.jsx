import styled from "styled-components";
import ContentItem from "./ContentItem";
import { useTodoState } from "./TodoReducer";

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

    // 여기서는 state를 조회하고 보여줍니다
    // item부분서 변화를 주는 작업을 하려고 합니다.
    const todos = useTodoState();

    return(
        <ContentStyle>
            {
                todos.map(todo => (
                    <ContentItem 
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                    />
                ))
            }
        </ContentStyle>
    )
}

export default Content;