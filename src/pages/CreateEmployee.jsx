import React from "react";
import { Link } from "react-router-dom"; // Import Link

function CreateEmployee() {
    return (
        <div>
            <h1>HRnet</h1>
            <Link to="/employee-list">View Current Employees</Link>{" "}
            {/* Lien vers l'autre page */}
            <h2>Create Employee</h2>
            {/* TODO: Ajouter le formulaire ici */}
        </div>
    );
}

export default CreateEmployee;
