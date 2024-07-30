import { Outlet } from "react-router-dom";

import Navbar from "../main-components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
