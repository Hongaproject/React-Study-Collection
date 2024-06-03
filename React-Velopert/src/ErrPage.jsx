import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrPage() {

    const err = useRouteError();
    const navigator = useNavigate();

    return (
        <div id="error-page">
            <h1>Error!</h1>
            <p>
                <i>{err.status}</i>
                <i>{err.statusText || err.message}</i>
            </p>
            <button onClick={()=> navigator("/")}>Home</button>
        </div>
    );
}