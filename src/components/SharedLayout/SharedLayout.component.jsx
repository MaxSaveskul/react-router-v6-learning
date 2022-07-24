import { Outlet } from "react-router-dom";
import Header from "../Header/Header.component.jsx";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
