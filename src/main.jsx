import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import "./cofee.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "./routes/Bag.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import Menu from "./routes/Menu.jsx";
import Product from "./routes/Product.jsx";
import Review from "./routes/Review.jsx";
import Contact from "./routes/Contact.jsx";
import Blog from "./routes/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /* loader: */ },
      {
        path: "/bag",
        element: <Bag />,
        /* action:  , */
      },
      {
        path: "/about",
        element: <About />,
        /* action:  , */
      },
      {
        path: "/menu",
        element: <Menu />,
        /* action:  , */
      },
      {
        path: "/product",
        element: <Product />,
        /* action:  , */
      },
      {
        path: "/review",
        element: <Review />,
        /* action:  , */
      },{
        path: "/contact",
        element: <Contact />,
        /* action:  , */
      },{
        path: "/blog",
        element: <Blog />,
        /* action:  , */
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
