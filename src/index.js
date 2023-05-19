import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import "animate.css/animate.min.css";

//pages
import Lang from "./pages/lang";
import Home from "./pages/home";
import Moto from "./pages/moto";

//global styles
import "./global.css";
import AutoTonog from "./pages/autotonog";
import OtherTonog from "./pages/othertonog";
import Amar from "./pages/amar";
import Service from "./pages/service";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lang />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/moto",
    element: <Moto />,
  },
  {
    path: "/auto",
    element: <AutoTonog />,
  },
  {
    path: "/other",
    element: <OtherTonog />,
  },
  {
    path: "/amar",
    element: <Amar />,
  },
  {
    path: "/service",
    element: <Service />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
