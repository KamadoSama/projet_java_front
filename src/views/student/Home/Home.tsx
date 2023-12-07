import React from "react";
import { Navbar } from "../../../layouts";
import { Outlet } from "react-router";
import { Sidebar } from "..";

export default function HomeStudent() {
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
