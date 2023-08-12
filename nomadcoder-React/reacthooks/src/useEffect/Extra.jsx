

//usePreventLeave, useConfirm 사용
//useConfirm은 사용자가 무엇을 하기전에 보여줌 ex) 버튼을 클릭 시 이벤트 실행전에 메세지를 보여주고 싶을 때
function Extra() {
    
    const useConfirm = (message = "", callback, rejection) => {
        if(typeof callback !== "function"){ // 비교 연산자. 
            return;
        }
        const confirmAction = () => {
            if(window.confirm(message)){ // 어떤 함수인지 몰라서 오류가 난다. 
                callback();
            } else{
                rejection(); 
            }
        }
        return confirmAction;
    }

    const hi = () => {
        console.log("hi!"); // alert창에 있는 ok버튼을 누르면 console에 hi라고 나타난다. callback 으로 값이 전달되서 나타남
    }

    const no = () => {
        console.log("no!"); // alert창에 있는 Cancel버튼을 누르면 console에 no라고 나타남 rejection 으로 값이 전달되서 나타남
    }

    const confirmHi = () => {
        useConfirm("what?", hi, no); // 버튼 클릭시 what이라는 문구가 alert창에 나타날 것.
    }

    return(
        
        <div>
            <div>hello</div>
            <button onClick={confirmHi}>hi</button>
        </div>
    );
}

export default Extra; 