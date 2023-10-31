import { useEffect } from "react";
import { useState } from "react";

function UseScroll () {
    // 유저가 스크롤 해서 지나쳤을 때 색상을 바꾸거나 무엇이든지 할 필요가 있음. 

    const useScroll = () => {
        const [state, setState] = useState({
            x: 0,
            y: 0
        });
        const onScroll = () => {
            // console.log("y", window.scrollY, "x", window.screenX); // 콘솔에 x, y 좌표가 나타 남.
            setState({ y: window.scrollY, x: window.screenX}); //  setState에 x와 y좌표를 넣어 y가 100이 넘어가면 빨간색 아니면 파란색 
        }   
        useEffect(() => {
            window.addEventListener("scroll", onScroll); // 이벤트 추가
            return () => window.removeEventListener("scroll", onScroll); // 이벤트 삭제
        },[]);
        return state;
    };

    const {y} = useScroll();
    return(
        <div style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue "}}>Hi</h1> 
            {/* 
                참 거짓 판단할 변수 ? 참 : 거짓 
                y가 100이 넘어가면 빨간색을 나타나게 하고
                y가 100이 안넘어가면 파란색을 나타나게 한다.
            */}
        </div>
    );
}

export default UseScroll;