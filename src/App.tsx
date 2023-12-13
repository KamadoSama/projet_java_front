import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {HomeAdmin } from "./views/admin";
import { AddPfe, Dashboard, HomeStudent, Inscription } from "./views/student";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<HomeAdmin/>}>

          </Route>

          <Route path="/student" element={<HomeStudent/>}>
              <Route path=""  element={<Dashboard />}/>
              <Route path="inscription" element={<Inscription/>} />
              <Route path="ajoutPfe" element={<AddPfe />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
