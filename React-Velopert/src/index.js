// App파일 작동 시킬 때 필요한 소스 코드
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root')); // 브라우저에 있는 실제 DOM내부에 리액트 컴포넌트를 렌더링 한다는 뜻.
// root.render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// src내용 사용 할 때 필요한 소스코드
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, {loader as rootLoader , action as rootAcion} from "./routes/root";
import ErrPage from "./ErrPage";
import Contact, {loader as contactLoader} from "./routes/contact";
import EditContact from "./routes/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrPage />,
    loader: rootLoader,
    action: rootAcion,
    children: [
        {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
        },
        {
          path: "contacts/:contactId/edit",
          element: <EditContact />,
          loader: contactLoader,
        },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

