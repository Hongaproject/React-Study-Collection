
function UsePreventLeaveExtra() {
    // 주로 웹 사이트서 많이 사용 웹을 닫을시 경고창에 "저장되지 않았습니다." 를 알려줌 
    // usePreventLeave, useConfirm은 hooks를 사용하는 것이 아니다. 

    const usePreventLeave = () => {
        const listener = (event) => {
            event.preventDefault();
            event.returnValue = "";
        }
        const enablePrevent = () => {
        // API서 보냈는데 유저가 닫지 않기를 바란다면 그것을 보호 할 수 있도록 활성화 시키는 것. 
        // API가 응당해서 괜찮은 상태라면 굳이 enablePrevent사용안해도 됨.
            window.addEventListener("beforeunload" , listener);
            //beforeunload는 window가 닫히기 전에 function이 실행되는걸 허락 
        }
        const disablePrevent = () => {
            window.removeEventListener("beforeunload" , listener);
            // disablePrevent를 입력받는 버튼을 클릭하면 원래 처럼 바로 창을 나가거나 새로고침이 된다.
        }
        return { enablePrevent, disablePrevent };
    }
    // 창을 키고 버튼을 누르지 않고 닫으면 아무일도 안생김.


    const {enablePrevent, disablePrevent} = usePreventLeave();
    return(
        <div>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>unProtect</button>
        </div>
    );
}

export default UsePreventLeaveExtra;