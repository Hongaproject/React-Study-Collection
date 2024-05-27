import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout64 from "./routes/Layout64";
import Home64 from "./routes/Home64";
import Write64 from "./routes/Write64";
import Login64 from "./routes/Login64";
import Diary64 from "./routes/Diary64";
import Error64 from "./routes/Error64";

export default function Main64 () {
    
    // 리액트 라우터 돔 6.4버전 
    const router = createBrowserRouter([
        {
            path:"/",
            element: <Layout64 />,
            errorElement: <Error64 />,
            children: [
                {
                    path: "",
                    element: <Home64 />
                },
                {
                    path: "/Write",
                    element: <Write64 />
                },
                {
                    path: "/Diary/:id",
                    element: <Diary64 />
                }
            ]
        },
        {
            path: "/Login",
            element: <Login64 />
        }
    ])
    
    return(
        <div>
            <h1>리액트 라우터 돔 6.4버전 입니다.</h1>
            <RouterProvider router={router}/>
        </div>
    );
}


