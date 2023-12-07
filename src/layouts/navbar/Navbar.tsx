import React from "react";

export default function Navbar() {
  return (
    <header className="topbar" data-navbarbg="skin6">
      <nav className="navbar top-navbar navbar-expand-lg">
        <div className="navbar-header" data-logobg="skin6">
          {/* <!-- This is for the sidebar toggle which is visible on mobile only --> */}
          <a
            className="nav-toggler waves-effect waves-light d-block d-lg-none"
            href=""
          >
            <i className="ti-menu ti-close"></i>
          </a>
          {/* <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== --> */}
          <div className="navbar-brand">
            {/* <!-- Logo icon --> */}
            <a href="index.html">
              <img
                src="../assets/images/freedashDark.svg"
                alt=""
                className="img-fluid"
              />
            </a>
          </div>
          {/* <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== --> */}
          <a
            className="topbartoggler d-block d-lg-none waves-effect waves-light"
            href=""
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="ti-more"></i>
          </a>
        </div>
        {/* <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== --> */}
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          {/* <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== --> */}
          <ul className="navbar-nav float-left me-auto ms-3 ps-1">
            {/* <!-- Notification --> */}
            
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="settings" className="svg-icon"></i>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
        
          </ul>

          <ul className="navbar-nav float-end">
         
            

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href=""
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/users/profile-pic.jpg"
                  alt="user"
                  className="rounded-circle"
                  width="40"
                />
                <span className="ms-2 d-none d-lg-inline-block">
                  
                  <span className="text-dark">Kamado Sama</span>{" "}
                  <i data-feather="chevron-down" className="svg-icon"></i>
                </span>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-right user-dd animated flipInY">
                <a className="dropdown-item" href="">
                  <i data-feather="user" className="svg-icon me-2 ms-1"></i>
                  My Profile
                </a>
                <a className="dropdown-item" href="">
                  <i
                    data-feather="credit-card"
                    className="svg-icon me-2 ms-1"
                  ></i>
                  My Balance
                </a>
                <a className="dropdown-item" href="">
                  <i data-feather="mail" className="svg-icon me-2 ms-1"></i>
                  Inbox
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  <i data-feather="settings" className="svg-icon me-2 ms-1"></i>
                  Account Setting
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="">
                  <i data-feather="power" className="svg-icon me-2 ms-1"></i>
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <div className="pl-4 p-3">
                  <a href="" className="btn btn-sm btn-info">
                    View Profile
                  </a>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
