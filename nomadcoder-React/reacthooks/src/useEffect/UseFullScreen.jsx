import { useEffect, useRef, useState } from "react";

function UseFullScreen() {

    const useFullScreen = () => {
        const element = useRef();
        const fullScreen = () => {
            if(element.current){
                element.current.requestFullscreen(); // 풀 스크린을 만든다.
            }
        }
        const exit = () => {
            document.exitFullscreen();
        }

        return {element, fullScreen, exit};
    }

    const {fullScreen, element, exit} = useFullScreen(); // return된 값을 받아와서 useFullScreen을 사용 함.

    return(
        <div style={{height: "1000vh"}}>
            <div ref={element}>
                <img src="../react.png" /> {/* useRef로 img부분 접속 */}
                <button onClick={exit}>exit screen</button> {/* fullScreen에서 requestFullscreen();를 사용하여 풀 스크린으로 만듬. */}
            </div>
            <button onClick={fullScreen}>full screen</button> {/* fullScreen에서 requestFullscreen();를 사용하여 풀 스크린으로 만듬. */}
        </div>
    );
}

export default UseFullScreen;