import { useEffect, useRef, useState } from "react";

function UseFullScreen() {

    const useFullScreen = () => {
        const element = useRef();
        const fullScreen = () => {
            if(element.current){
                element.current.requestFullscreen(); // 풀 스크린을 만든다.
            }
        }
        return {element, fullScreen};
    }

    const {fullScreen, element} = useFullScreen();

    return(
        <div style={{height: "1000vh"}}>
            <img src="../react.png" ref={element}/> {/*  */}
            <button onClick={fullScreen}>full screen</button>
        </div>
    );
}

export default UseFullScreen;