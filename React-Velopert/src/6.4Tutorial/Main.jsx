import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import ErrorPage from "./ErrPage";
import Contact from "./routes/Contact";
 
export default function Main () {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <ErrorPage />
        },
        {
            path: "contacts/:contactId",
            element: <Contact />,
        },
    ]);

    return(
        <div>
            <RouterProvider router={router} />
        </div>
    );
}