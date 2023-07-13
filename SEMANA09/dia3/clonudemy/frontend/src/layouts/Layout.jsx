import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
