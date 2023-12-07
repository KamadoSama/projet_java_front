import React from "react";
import { Navbar } from "../../../layouts";
import { Sidebar } from "..";
import { Outlet } from "react-router";

export default function HomeAdmin() {
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <Sidebar />
      <div className="body-wrapper">
        <Navbar />

        <Outlet />
      </div>
    </div>
  );
}
