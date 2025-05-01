import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addEmployee } from "../store/employeesSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// TODO: Importer le composant Modal pour l'afficher après soumission
// TODO: Importer useDispatch et l'action addEmployee

function CreateEmployee() {
    // 2. Initialiser les états pour chaque champ du formulaire
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("null");
    const [startDate, setStartDate] = useState("null");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState("");

    // TODO: Gérer l'état d'ouverture de la modale (useState)
    const dispatch = useDispatch();

    // TODO: Gérer l'état d'ouverture de la modale (useState)

    const handleSubmit = (e) => {
        e.preventDefault();

        // 3. Créer l'objet employé à partir de l'état local
        const newEmployee = {
            // On pourrait ajouter un ID unique ici, mais pour l'instant on met juste les données
            // id: Date.now(), // Exemple simple d'ID, à améliorer potentiellement
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        };

        // TODO: Logique de validation avant de dispatcher

        // 3. Dispatcher l'action addEmployee avec le nouvel employé comme payload
        dispatch(addEmployee(newEmployee));

        console.log("Employee dispatched to Redux:", newEmployee);
        // TODO: Afficher la modale de confirmation
        // TODO: Optionnel: Réinitialiser le formulaire après soumission
    };

    return (
        <div>
            <div className="container">
                <Link to="/employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit} id="create-employee">
                    {/* 3. Connecter les états aux inputs/selects */}
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    {/* Pour l'instant, on lie l'input texte simple */}
                    <DatePicker
                        id="date-of-birth"
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        showYearDropdown
                        scrollableYearDropdown
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker
                        id="start-date"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        showYearDropdown
                        scrollableYearDropdown
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <label htmlFor="state">State</label>
                        {/* TODO: Remplacer par le composant Select/Dropdown */}
                        <select
                            name="state"
                            id="state"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        >
                            <option value="">Select State</option>
                            {/* TODO: Peupler avec la liste des états */}
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            {/* ... autres états ... */}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number" // On peut garder type="number" ou "text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    {/* TODO: Remplacer par le composant Select/Dropdown */}
                    <select
                        name="department"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    >
                        <option value="">Select Department</option>
                        {/* TODO: Peupler avec la liste des départements */}
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>

                    <button type="submit">Save</button>
                </form>
            </div>
            {/* ... (Partie Modale inchangée pour l'instant) ... */}
        </div>
    );
}

export default CreateEmployee;
