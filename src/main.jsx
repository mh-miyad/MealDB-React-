import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";
import ErrorPage from "./Page/ErrorPage";
import About from "./Page/About";
import Contact from "./Page/Contact";
const  router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
          path:'/',
          element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },{
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'*',
        element:<ErrorPage/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
