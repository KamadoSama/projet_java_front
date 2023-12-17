import React, { useEffect, useState } from "react";
import { Navbar } from "../../../layouts";
import { Sidebar } from "..";
import { Outlet, useNavigate } from "react-router";
import { getToken } from "../../../services/Token/TokenStorage";

export default function HomeAdmin() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
      const userToken = getToken("admin");
      if (!userToken || userToken === 'undefined') {
          setIsLoggedIn(false);
          return navigate('/');
      }
      setIsLoggedIn(true);
  }
  useEffect(() => {
          checkUserToken();
      }, [isLoggedIn]);
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
