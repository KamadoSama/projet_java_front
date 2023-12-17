import React from "react";
import { Navbar } from "../../../layouts";
import { Sidebar } from "..";
import { Outlet } from "react-router";

export default function HomeAdmin() {
  return (
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
  <Navbar />
  <Sidebar />
  <div className="page-wrapper">
    
    <Outlet />
  </div>
</div>
  );
}
