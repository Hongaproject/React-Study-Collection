// 동작을 가능하게 하는 기능을 추가하는 부분 -> 컨테이너 컴포넌트
// 프리젠테이셔널 컴포넌트에 props로 데이터를 전달 시켜 줌. 컴포넌트들 관리 함.
// 주로 DOM 엘리먼트를 직접적으로 사용하지 않음. 기능 내용만 작성을 한다.
// UI쪽과 Data 쪽이 분리되어 프로젝트 이해하기 쉽고 컴포넌트 재사용성이 높아짐.

import { decrease, increase, setDiff } from "../modules/Counter";
import Count from "./Count";
import { useDispatch, useSelector } from "react-redux";


function CountCont () {

    // useSelector는 리덕스 스토어의 상태를 조회해줍니다.
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
    const {number, diff} = useSelector(state => ({
        number: state.Counter.number,
        diff: state.Counter.diff
    }));

    // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
    const dispatch = useDispatch();

    // 각 액션들을 디스패치하는 함수들을 만든다.
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <div>
            <Count // 상태와
                number={number}
                diff={diff}
                // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onSetDiff={onSetDiff} 
            />
        </div>
    );
}

export default CountCont;