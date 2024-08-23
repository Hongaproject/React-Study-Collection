import { useState } from "react";

export default function RouterApp(){

    const [userRole, setUserRole] = useState('guest');
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() => {
        const roles = ['guest', 'user', 'admin'];
        const randomRole = roles[Math.floor(Math.random() * 3)];
        setUserRole(randomRole);
        setIsLoading(false);
    }, 2000);

    return(
        <div>
            <SimpleRouter userRole={userRole} isLoading={isLoading} />
        </div> 
    );
}

const AdminView = () => <div>관리자 화면</div>;
const UserView = () => <div>일반 유저 화면</div>;
const GuestView = () => <div>게스트 화면</div>;

const SimpleRouter = ({isLoading, userRole}) => {
    if (isLoading) {
        return <LoadingSpinner />
    }

    switch (userRole) {
        case 'admin':
            return <AdminView />;
        case 'user':
            return <UserView />;
        case 'guest':
            return <GuestView />;
        default:
            return '뭔가 에러가 발생했습니다.'
    }
}

const LoadingSpinner = () => {
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img src="/dancing.gif" alt="" style={{ width: '100px', height: '100px' }} />
        </div>
    )
}