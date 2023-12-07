import React from "react";
import { Navbar} from "../../../layouts";
import { Outlet } from "react-router";
import { Sidebar } from "..";

export default function HomeTeacher() {
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
