import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import Modal from "react-simplest-modal";
import SimpleSelect from "../components/SimpleSelect";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeesSlice";
import { departments, states } from "../utils/constants";
import "react-datepicker/dist/react-datepicker.css";

function CreateEmployee() {
    const dispatch = useDispatch();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedDateOfBirth = dateOfBirth
            ? dateOfBirth.toISOString().split("T")[0]
            : null;
        const formattedStartDate = startDate
            ? startDate.toISOString().split("T")[0]
            : null;
        const newEmployee = {
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

        // Reset state after submit
        setFirstName("");
        setLastName("");
        setDateOfBirth(null);
        setStartDate(null);
        setStreet("");
        setCity("");
        setState("");
        setZipCode("");
        setDepartment("");

        setIsModalOpen(true);
    };

    return (
        <div>
            <div className="container">
                <h1>HRnet</h1>
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
                <p>Employee Created!</p>
            </Modal>
        </div>
    );
}

export default CreateEmployee;
