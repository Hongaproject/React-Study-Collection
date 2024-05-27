import { Link, Outlet } from "react-router-dom";

export default function Layout64 () {
    return(
        <div>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/Write"><h3>Write</h3></Link>
            <Outlet />
        </div>
    );
}