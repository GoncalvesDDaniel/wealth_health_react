import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SimpleSelect from "../components/SimpleSelect";
import { addEmployee } from "../store/employeesSlice";
import { departments, states } from "../utils/constants";
import Modal from "../components/Modal/Modal";

import "react-datepicker/dist/react-datepicker.css";

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

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

        setIsModalOpen(true); // Ouvrir la modale après soumission
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
                            type="number"
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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {/* Contenu de la modale */}
                <p>Employee Created!</p>
                {/* <button onClick={() => setIsModalOpen(false)}>OK</button> */}
            </Modal>
        </div>
    );
}

export default CreateEmployee;
