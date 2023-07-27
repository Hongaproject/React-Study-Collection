import { useNavigate } from "react-router-dom";

function Userlist () {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const users = [
        {
            id: 1,
            name: "a",
            email: "a@.com"
        },
        {
            id: 2,
            name: "b",
            email: "b@.com"
        },
        {
            id: 3,
            name: "c",
            email: "c@.com"
        }
    ];

    return(
        <div>
            <button onClick={goHome}><h1>Home</h1></button>
            {users[0].name} ({users[0].email})  
            {/* 초반 배열 생성법 */}
        </div>
    );
}

export default Userlist;