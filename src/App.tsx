import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeAdmin } from "./views/admin";
import {
  AddPfe,
  StudentDashboard,
  HomeStudent,
  Inscription,
} from "./views/student";
import { AddStudent, EducatriceDashboard, HomeEducatrice } from "./views/educatrice";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<HomeAdmin />}></Route>

          <Route path="/student" element={<HomeStudent />}>
            <Route path="" element={<StudentDashboard />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="ajoutPfe" element={<AddPfe />} />
          </Route>

          <Route path="/educatrice" element={<HomeEducatrice />}>
            <Route path="" element={<EducatriceDashboard />} />
            <Route path="addStudent" element={<AddStudent />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
