import React from "react";
import Navbar from "./main-components/Navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
