
function UseNotification() {
    // 알람이 실행되는 function
    // https://developer.mozilla.org/en-US/docs/Web/API/Notification 에서 사용을 함

    const useNotification = (title, options) => {
        if(!("Notification" in window)) {
            return;
        }
        const fireNotif = () => {
            if(Notification.permission !== "granted"){
                Notification.requestPermission().then(permission => {
                    if(permission === "granted"){
                        new Notification(title, options);
                    }else {
                        return; 
                    }
                })
            }else {
                new Notification(title, options);
            }
        };
        return fireNotif;
    }
    // permission은 읽기전용이며 사용자가 알림을 거부했는지, 허가했는지 알려준다.  
    const Notif = useNotification("작동됩니다.");
    return(
        <div>
            <button onClick={Notif}>Hi</button>
            {/* 열리지 않는다면 브라우저 알림 설정 확인하기. */}
        </div>
    );
}

export default UseNotification;