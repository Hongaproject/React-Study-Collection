import { useEffect } from "react";
import { useRef } from "react";

function UseFadeIn() {
    // hooks와 animation을 합침.
    const useFadeIn = (duration) => {
        const element = useRef();
        useEffect(() => { //element에 값을 넣기 위해 사용함.
            if(element.current){
                const {current} = element;
                current.style.transition = `opacity ${duration}s`; // 두 번 째 방식
                //current.style.transition = `opacity 3s`; // 처음 방식
                current.style.opacity = 1;
            }
        }, []); // Mount시에만 동작하게 비워둠

        // return element; // 1번 방식
        return {ref: element, style: {opacity:0}};
    }

    // const el = useFadeIn(); // 1번 방식
    const fadeInH1 = useFadeIn(2);
    const fadeInP = useFadeIn(5);
    return(
        <div>
            {/* <h1 ref={el} style={{opacity: 0}}>Hello</h1> */} {/* 1번 방식 */}
            <h1 {...fadeInH1}>Hello</h1> {/* 전개 연산자 spread 문법 사용 */}
            <p {...fadeInP}>안녕하세요~</p> 
        </div>
    );
}

export default UseFadeIn;