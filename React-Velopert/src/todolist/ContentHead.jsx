import styled from "styled-components";
import { useTodoState } from "./TodoReducer";

const ContentHeadStyle = styled.div`
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    .list-number{
        color: #20c997;
        font-size: 20px;
        margin-top: 40px;
        font-weight: bold;
    }
`

function ContentHead () {

    // context와 연동하여 기능을 구현하려고 합니다.
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done); // done값이 false인 개수를 알려줌.

    const toDay = new Date(); // 현재 날짜 및 시간을 알려줌

    const week = ['일', '월', '화', '수', '목', '금', '토']; // 요일을 보여주기 위해 생성

    const entireToDayWeek = `${toDay.getFullYear()}년 ${toDay.getMonth() +1}월 ${toDay.getDate()}일 ${week[toDay.getDay()]}요일`

    // 이렇게도 날짜를 보여줄 수 있음.
    // const today = new Date(); 
    // const dateString = today.toLocaleDateString('ko-KR', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });
    // const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    // Mold -> 가운데 흰색 부분을 보여주는 곳 
    // Mold의 헤더 부분을 보여줌

    return(
        <ContentHeadStyle>
            <h1>{entireToDayWeek}</h1>
            <div className="list-number">할 일 {undoneTasks.length}개 남음</div>
        </ContentHeadStyle>
    )
}

export default ContentHead;