import { useEffect, useState } from "react";

function test1 () {

    const [money, setMoney] = useState(0); // useState로 0값으로 설정해주고

    const preventClose = (e) => { // 이벤트를 막아주는 함수를 사용한다.
        e.preventDefault(); //  창이 닫히거나 새로고침 등을 막아줌.
    }

    useEffect(() => {   // useEffect를 사용해서 열려있을때와 닫힐때를 설정해줘서 이벤트를 막아준다.
        (() => {    
            // beforeunload 이벤트는 사용자가 페이지를 떠날때 발생시키는 것 
            // 새로고침, 뒤로가기, 브라우저 닫기 등 
            window.addEventListener("beforeunload", preventClose); // window.addEventListener('beforeunload', 콜백함수);
        })();
            return () => { 
            window.removeEventListener("beforeunload", preventClose);  
        };
    }, []);

    return(
        <div>
            <h1>창구입니다.</h1>
            <h1>{money}</h1>
            <button onClick={()=> setMoney(money+5000)}>+</button>
            <button onClick={()=> setMoney(money-5000)}>-</button>
        </div>
    );
}

export default test1;