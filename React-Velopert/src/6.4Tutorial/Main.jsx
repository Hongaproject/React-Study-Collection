import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

 
export default function Main () {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>연락처 만들기</div>
        }
    ])

    return(
        <div>
            <RouterProvider router={router} />
        </div>
    );
}