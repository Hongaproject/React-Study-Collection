import { useNavigate, useRouteError } from "react-router-dom";

export default function Error64 () {

    const err = useRouteError();
    const navigator = useNavigate();

    return(
        <div>
            <h1>Error</h1>
            <p>
                <i>{err.status} </i>
                <i>{err.statusText || err.message}</i>
            </p>
            <button onClick={() => navigator("/")}>Home</button>
        </div>
    );
}

