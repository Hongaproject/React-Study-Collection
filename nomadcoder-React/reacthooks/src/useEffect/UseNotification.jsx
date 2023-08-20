
function UseNotification() {
    // 알람이 실행되는 function

    const useNotification = () => {
        if(!("Notification" in window)) {
            return;
        }

    }

    return(
        <div>
            <h1></h1>
        </div>
    );
}

export default UseNotification;