import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const err = useRouteError();
    const navigator = useNavigate();

    return (
        <div id="error-page">
            <h1>Error!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{err.statusText || err.message}</i>
            </p>
            <button onClick={()=> navigator("/")}>Home</button>
        </div>
    );
}