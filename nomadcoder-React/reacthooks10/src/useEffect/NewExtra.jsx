
function NewExtra () {

    const useConfirm = (message = "", callback, rejection) => {
        if(!callback || typeof callback !== "function"){ // 비교 연산자. 
            return;
            // callback이 존재하지 않거나 function이 아닐때 
        }
        if(rejection && typeof rejection !== "function"){
            return;
            // rejection은 의무적인게 아니라 꼭 확인 할 필요는 없음 
            // 존재하는게 function이 아니면 return 
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

    return(
        <div></div>
    );
}

export default NewExtra;