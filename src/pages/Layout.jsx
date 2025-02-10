import { Outlet } from "react-router-dom";
import { Header } from "../Components/header/Header";
import { Footer } from "../Components/footer/Footer";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
