
export default function DisplayFeelings (props) {
    return(
        <>
            <h2>{props.current ? props.current : "기분이 선택되지 않았습니다."}</h2>
        </>
    );
}