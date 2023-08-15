import { useEffect } from "react";

function UsePageLeave() {
    // 기본적으로 탭을 닫을 때 실행되는 function

    const usePageLeave = (onBefore) => {
        if(typeof onBefore !== "function"){
            return;
        }
        const handle = (event) => {
            const {clientY} = event;
            if(clientY <= 0){
                onBefore();
            }
        }

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            document.addEventListener("mouseleave", handle); //마우스가 document를 벗어났을 때 함수 실행.
            return () => { // unMount시 이벤트를 지움. 
                document.removeEventListener("mouseleave", handle);
            }
        }, []);
    }

    const begForLife = () => console.log("Pls dont leave");
    usePageLeave(begForLife);

    return (
        <div>
            <div>Hello</div>
        </div>
    );
}

export default UsePageLeave;