import { useParams } from "react-router-dom";

export default function Diary6 () {
    const {id} = useParams();
    return(
        <div>
            상세페이지 입니다.
            <p>이 페이지 번호는 {id} 입니다.</p>
        </div>
    );
}