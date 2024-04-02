// 동작을 작동시키는 틀 제작 -> 프리젠테이셔널 컴포넌트 사용
// 주로 Redux를 사용할 때 사용되는 구조 Dumb 컴포넌트와 Smart 컴포넌트로도 알려져있음.
// 프리젠테이셔널 컴포넌트는 오직 뷰만 담당하는 컴포넌트 이 부분은 리덕스 스토어와 직접적인 접근 X, 오직 props로만 데이터를 가져 옴.

function Counter ({number, onIncrease, onDecrease}) {

    // 프리젠테이셔널이라 props로만 데이터를 받아 옴. 컨테이너 컴포넌트서 데이터를 받아 옴. 

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}></button>
            <button onClick={onDecrease}></button>
        </div>
    );
}


