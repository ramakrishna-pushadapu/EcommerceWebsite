import React from "react";
import { Outlet } from "react-router-dom";
import NavItems from "./assets/components/navitem/NavItems";
import Footer from "./assets/components/Footer";


const App = () => {
  return (
    <>
      <NavItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
