
export default function Resume (props) {
    return(
        <div>
            <h1>{props.name}자기소개서</h1>
            <h2>{props.hello}</h2>
            <h3>취미: {props.hobby}</h3>
            <h3>좋아하는 음식: {props.food}</h3>
            <h3>좋아하는 색: {props.color}</h3>
        </div>
    )
}