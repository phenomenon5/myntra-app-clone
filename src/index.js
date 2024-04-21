import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import Bag from "./components/Bag";
import Home from "./routes/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store = {store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
