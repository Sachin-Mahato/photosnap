import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

import Home from "./routes/Home";
import Stories from "./routes/Stories";
import Features from "./routes/Features";
import Pricing from "./routes/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/stories", element: <Stories /> },
      { path: "/features", element: <Features /> },
      { path: "/pricing", element: <Pricing /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
