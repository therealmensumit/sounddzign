import { Outlet } from "react-router-dom";
import { Header } from "../Components/header/Header";
import { Footer } from "../Components/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};
