import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="bodyShadow mx-auto max-w-[1440px]">
        <Outlet />
      </main>
      <div
        id="overlay"
        className="fixed inset-0 z-10 hidden min-h-screen min-w-full bg-pureBlack bg-opacity-50"
      ></div>
      <Footer />
    </>
  );
};

export default App;
