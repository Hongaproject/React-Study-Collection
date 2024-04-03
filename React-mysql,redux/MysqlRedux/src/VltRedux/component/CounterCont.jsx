// 동작을 가능하게 하는 기능을 추가하는 부분 -> 컨테이너 컴포넌트
// 프리젠테이셔널 컴포넌트에 props로 데이터를 전달 시켜 줌. 컴포넌트들 관리 함.
// 주로 DOM 엘리먼트를 직접적으로 사용하지 않음. 기능 내용만 작성을 한다.
// UI쪽과 Data 쪽이 분리되어 프로젝트 이해하기 쉽고 컴포넌트 재사용성이 높아짐.

import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { decrease, increase } from "../modules/Count";

function CounterCont() {

    const number = useSelector(state => state.Count) // useSelector를 사용해서 리덕스 스토어 상태를 조회를 함.
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase()); // modules/Count파일에 있는 액션생성 함수를 사용한다.
    }

    
    const onDecrease = () => {
        dispatch(decrease()); // modules/Count파일에 있는 액션생성 함수를 사용한다.
    }

    return(
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    );
}

export default CounterCont;