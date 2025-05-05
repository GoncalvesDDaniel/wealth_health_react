import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addEmployee } from "../store/employeesSlice";
import DatePicker from "react-datepicker";
import { states, departments } from "../utils/constants";
import SimpleSelect from "../components/SimpleSelect";

import "react-datepicker/dist/react-datepicker.css";

// TODO: Importer le composant Modal pour l'afficher après soumission
// TODO: Importer useDispatch et l'action addEmployee

function CreateEmployee() {
    // 2. Initialiser les états pour chaque champ du formulaire
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
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
        const formattedDateOfBirth = dateOfBirth
            ? dateOfBirth.toISOString().split("T")[0]
            : null;
        const formattedStartDate = startDate
            ? startDate.toISOString().split("T")[0]
            : null;
        const newEmployee = {
            // id: Date.now() ? id for the redux store maybe
            firstName,
            lastName,
            formattedDateOfBirth,
            formattedStartDate,
            street,
            city,
            state,
            zipCode,
            department,
        };
        dispatch(addEmployee(newEmployee));

        // Reset des états locaux
        setFirstName("");
        setLastName("");
        setDateOfBirth(null);
        setStartDate(null);
        setStreet("");
        setCity("");
        setState("");
        setZipCode("");
        setDepartment("");
    };

    return (
        <div>
            <div className="container">
                <Link to="/employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form onSubmit={handleSubmit} id="create-employee">
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
                        // showYearDropdown
                        // scrollableYearDropdown
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

                        <SimpleSelect
                            label="State"
                            id="state"
                            options={states}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number" // On peut garder type="number" ou "text"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        />
                    </fieldset>

                    <SimpleSelect
                        label="Department"
                        id="department"
                        options={departments}
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                    />
                    <div className="submit">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
            {/* ... (Partie Modale inchangée pour l'instant) ... */}
        </div>
    );
}

export default CreateEmployee;
