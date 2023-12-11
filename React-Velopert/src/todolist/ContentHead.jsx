import styled from "styled-components";

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

    const toDay = new Date(); // 현재 날짜 및 시간을 알려줌

    const week = ['일', '월', '화', '수', '목', '금', '토']; // 요일을 보여주기 위해 생성

    const entireToDayWeek = `${toDay.getFullYear()}년 ${toDay.getMonth() +1}월 ${toDay.getDate()}일 ${week[toDay.getDay()]}요일`



    return(
        <ContentHeadStyle>
            <h1>{entireToDayWeek}</h1>
            <div className="list-number">할 일 </div>
        </ContentHeadStyle>
    )
}

export default ContentHead;