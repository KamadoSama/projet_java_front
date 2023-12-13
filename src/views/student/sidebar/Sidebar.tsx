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
                  className="sidebar-link sidebar-link student"
                  href="/student"
                  aria-expanded="false"
                >
                  <i data-feather="home" className="feather-icon"></i>
                  <span className="hide-menu">Tableau de bord</span>
                </a>
              </li>
              <li className="list-divider"></li>
          

              <li className="sidebar-item ">
                {" "}
                <a
                  className="sidebar-link has-arrow inscription"
                  href=""
                  aria-expanded="false"
                >
                  <i data-feather="file-text" className="feather-icon"></i>
                  <span className="hide-menu">Inscription </span>
                </a>
                <ul
                  aria-expanded="false"
                  className="collapse  first-level base-level-line"
                >
                  <li className="sidebar-item">
                    <a href="" className="sidebar-link">
                      <span className="hide-menu"> Information rentrée</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="/student/inscription" className="sidebar-link">
                      <span className="hide-menu">S'insrcit</span>
                    </a>
                  </li>
                
                </ul>
              </li>
              <li className="list-divider"></li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link has-arrow"
                  href="/"
                  aria-expanded="false"
                >
                  <i data-feather="file-text" className="feather-icon"></i>
                  <span className="hide-menu">Hébergement</span>
                </a>
                <ul
                  aria-expanded="false"
                  className="collapse  first-level base-level-line"
                >
                  <li className="sidebar-item">
                    <a href="/login" className="sidebar-link">
                      <span className="hide-menu"> Demande d'admission</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-input-grid.html" className="sidebar-link">
                      <span className="hide-menu">Demande de sortir</span>
                    </a>
                  </li>
                
                </ul>
              </li>


              <li className="list-divider"></li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link has-arrow ajoutPfe"
                  href="/"
                  aria-expanded="false"
                >
                  <i data-feather="file-text" className="feather-icon"></i>
                  <span className="hide-menu">PFE</span>
                </a>
                <ul
                  aria-expanded="false"
                  className="collapse  first-level base-level-line"
                >
                  <li className="sidebar-item">
                    <a href="/student/ajoutPfe" className="sidebar-link">
                      <span className="hide-menu"> Ajout de thème</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="form-input-grid.html" className="sidebar-link">
                      <span className="hide-menu">Consultation de thème </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="list-divider"></li>
              <li className="sidebar-item">
                {" "}
                <a
                  className="sidebar-link has-arrow"
                  href="/"
                  aria-expanded="false"
                >
                  <i data-feather="file-text" className="feather-icon"></i>
                  <span className="hide-menu">Demande de document</span>
                </a>
                <ul
                  aria-expanded="false"
                  className="collapse  first-level base-level-line"
                >
                  <li className="sidebar-item">
                    <a href="/login" className="sidebar-link">
                      <span className="hide-menu">Bulletin</span>
                    </a>
                  </li>
              
                
                </ul>
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
