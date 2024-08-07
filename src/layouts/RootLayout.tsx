import { Outlet } from "react-router-dom";

import Navbar from "../main-components/Navbar";
// Aparecium (Revealing Charm)

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
