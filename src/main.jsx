// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import ErrorBoundary from "./ErrorBoundary.jsx";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider.jsx";

// Global Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/css/icofont.min.css";
import "./assets/css/style.min.css";

// Pages
import Home from "./assets/home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Shop from "./shop/Shop.jsx";
import SingleProduct from "./shop/singleproduct/SingleProduct.jsx";
import CartPage from "./shop/cartpage/CartPage.jsx";
import SingleBlog from "./blog/SingleBlog.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import Login from "./assets/components/Login.jsx";
import PrivateRoute from "./privateroute/PrivateRoute.jsx";
import Signup from "./assets/components/Signup.jsx";
import ForgotPassword from "./assets/components/ForgotPassword.jsx";

// Router Configuration
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // npm
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <SingleBlog /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <SingleProduct /> },
      { path: "cart-page", element: <PrivateRoute><CartPage /></PrivateRoute> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Signup /> },
      { path: "forgot-password", element: <ForgotPassword />}
    ],
  },
]);

//  Single top-level router — NO BrowserRouter here!
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
