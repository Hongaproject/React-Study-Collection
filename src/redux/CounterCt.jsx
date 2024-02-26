import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./Counter";

function CounterCt () {
    // react-redux 라이브러리에서 제공하는 useSeletor 사용하여 store에 저장되어 있는 데이터 가져오기
    // useDispatch 사용하여 해당 액션 실행.

    const count = useSelector(state => state.num);
    const dispatch = useDispatch();

    console.log(dispatch);
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
        </div>
    );
}

export default CounterCt;