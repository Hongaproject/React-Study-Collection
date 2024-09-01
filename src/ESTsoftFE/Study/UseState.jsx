import './Component.css';

// 설명
// 리액트는 컴포넌트 기반으로 구성되어 있다. -> 컴포넌트 사용 이유 = 독립적인 UI를 제작할 수 있고, 사용시에 유지보수와 코드 재사용성에 좋다.
// JSX란? -> JavaScriptXML의 약자로 리액트서 사용되는 특수 문법, HTML처럼 제작 가능, 사용시에 간편하게 개발을 진행 할 수 있다. 

export default function UseState () {

    return(
        <div>
            <Component />
        </div>
    );
}

const List = [
    {id : 1, area: "서울", visited: false},
    {id : 2, area: "대전", visited: true},
    {id : 3, area: "부산", visited: false}
]

export function Component () {

    const listItems = List.map((item) => {
        return(
            <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
        )
    })

    return(
        <div>
            <ul className="list-area">
                {listItems} <br />
                <li className={List[0].visited ? "active" : null}>{List[0].area}</li>
                <li className={List[1].visited ? "active" : null}>{List[1].area}</li>
                <li className={List[2].visited ? "active" : null}>{List[2].area}</li>
            </ul>
            <ul className='list-area'>
                {
                    // 명시적 변환 {} 사용 시에 return 꼭 사용 - 사용 안할시 undefined
                    List.map((item) => {
                        return(
                            <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                        )
                    })
                }
            </ul>
            <ul className='list-area'>
                {
                    // 암묵적 반환 () 사용 시에 return 사용 안해도 알아서 값 반환해줌
                    List.map((item) => (
                        <li key={item.id} className={item.visited ? "active" : null}>{item.area}</li>
                    ))
                }
            </ul>
        </div>
    );
}
