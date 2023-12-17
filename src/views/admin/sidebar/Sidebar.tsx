import React, { useRef } from "react";
import { Scroll } from "../../../components";

export default function Sidebar() {
  return (
    <>
      <Scroll />
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar" data-sidebarbg="skin6">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link sidebar-link admin"
                  href="/admin"
                  aria-expanded="false"
                >
                  <i data-feather="home" className="feather-icon"></i>
                  <span className="hide-menu">Tableau de bord</span>
                </a>
              </li>

              <li className="list-divider"></li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link sidebar-link addEducatrice"
                  href="/admin/addEducatrice"
                  aria-expanded="false"
                >
                  <i data-feather="home" className="feather-icon"></i>
                  <span className="hide-menu">Gérer educatrice</span>
                </a>
              </li>

              <li className="list-divider"></li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link sidebar-link addTeacher"
                  href="/admin/addTeacher"
                  aria-expanded="false"
                >
                  <i data-feather="home" className="feather-icon"></i>
                  <span className="hide-menu">Gérer enseignant</span>
                </a>
              </li>
             
              <li className="list-divider"></li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link sidebar-link"
                  href="/"
                  aria-expanded="false"
                >
                  <i data-feather="log-out" className="feather-icon"></i>
                  <span className="hide-menu">Se deconnecter</span>
                </a>
              </li> 
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
