import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrimeReactProvider } from "primereact/api";

import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import "./assets/css/style.min.css";
import "./index.css";
import "primeflex/primeflex.css"; // css utility
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css"; //
ReactDOM.createRoot(document.getElementById("root")!).render(
  <PrimeReactProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </PrimeReactProvider>
);
