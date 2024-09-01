import './Component.css';

// 설명
// 리액트는 컴포넌트 기반으로 구성되어 있다. -> 컴포넌트 사용 이유 = 독립적인 UI를 제작할 수 있고, 사용시에 유지보수와 코드 재사용성에 좋다.
// JSX란? -> JavaScriptXML의 약자로 리액트서 사용되는 특수 문법, HTML처럼 제작 가능, 사용시에 간편하게 개발을 진행 할 수 있다. 

const List = [
    {id : 1, area: "서울", visited: false},
    {id : 2, area: "대전", visited: true},
    {id : 3, area: "부산", visited: false}
]

export default function UseState () {

    return(
        <div>
            <Component />
        </div>
    );
}

export function Component () {
    // 리액트 사용법 제작 중
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    const listItems = List.map((item) => {
        return(
            <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
        )
    })

    return(
        <div>
            <h1>년도 : {year}</h1>
            <h2>달 : {month}</h2>
            <ul className="list-area">
                <li className={List[0].visited ? "active" : null}>{List[0].area}</li>
                <li className={List[1].visited ? "active" : null}>{List[1].area}</li>
                <li className={List[2].visited ? "active" : null}>{List[2].area}</li>
                {listItems}
            </ul>
            {
                // 렌더링 됨.
                List.map((item) => {
                    return(
                        <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                    )
                })
            }
            {
                // 렌더링 안됨.
                List.map((item) => {
                    <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                })
            }
            {
                // 렌더링 됨.
                List.map((item) => (
                    <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                ))
            }
        </div>
    );
}
