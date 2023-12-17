import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddEducatrice,
  AddTeacher,
  GestionEcue,
  HomeAdmin,
} from "./views/admin";
import {
  AddPfe,
  StudentDashboard,
  HomeStudent,
  Inscription,
} from "./views/student";
import {
  AddStudent,
  EducatriceDashboard,
  HomeEducatrice,
  GestionStudent
} from "./views/educatrice";

import { Login } from "./views/login/Login";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/admin" element={<HomeAdmin />}>
            <Route path="ecue" element={<GestionEcue />} />
            <Route path="addTeacher" element={<AddTeacher />} />
            <Route path="addEducatrice" element={<AddEducatrice />} />
          </Route>

          <Route path="/student" element={<HomeStudent />}>
            <Route path="" element={<StudentDashboard />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="ajoutPfe" element={<AddPfe />} />
          </Route>

          <Route path="/educatrice" element={<HomeEducatrice />}>
            <Route path="" element={<EducatriceDashboard />} />
            <Route path="addStudent" element={<AddStudent />} />
            <Route path="gestionStudent" element={<GestionStudent />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
