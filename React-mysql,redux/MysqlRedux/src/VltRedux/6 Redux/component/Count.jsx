// 동작을 작동시키는 틀 제작 -> 프리젠테이셔널 컴포넌트 사용
// 주로 Redux를 사용할 때 사용되는 구조 Dumb 컴포넌트와 Smart 컴포넌트로도 알려져있음.
// 프리젠테이셔널 컴포넌트는 오직 뷰만 담당하는 컴포넌트 이 부분은 리덕스 스토어와 직접적인 접근 X, 오직 props로만 데이터를 가져 옴.
// 프리젠테이셔널을 사용하면 ui에 집중을 할 수 있다. 

function Count ({number, onIncrease, onDecrease, diff, onSetDiff}) { 

    const onChange = (e) => {
        onSetDiff(parseInt(e.target.value, 10));
    }

    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type="text" value={diff} min='1' onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
}

export default Count;