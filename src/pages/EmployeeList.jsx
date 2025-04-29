import React from "react";
import { Link } from "react-router-dom"; // Import Link

function EmployeeList() {
    return (
        <div>
            <h1>Current Employees</h1>
            {/* TODO: Ajouter la table ici */}
            <Link to="/">Home</Link>{" "}
            {/* Lien retour vers la page de création */}
        </div>
    );
}

export default EmployeeList;
