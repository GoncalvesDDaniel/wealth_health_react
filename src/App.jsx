// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
// TODO: Importer un composant Layout si on veut un Header/Footer persistant

function App() {
    return (
        // TODO: Wrapper avec un composant Layout si besoin
        <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
    );
}

export default App;
