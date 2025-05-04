// src/pages/EmployeeList.jsx
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

function EmployeeList() {
    const employeesData = useSelector((state) => state.employees.list);
    const data = useMemo(() => employeesData, [employeesData]);

    const columns = useMemo(
        () => [
            {
                name: "First Name",
                selector: (row) => row.firstName,
                sortable: true,
            },
            {
                name: "Last Name",
                selector: (row) => row.lastName,
                sortable: true,
            },
            {
                name: "Start Date",
                selector: (row) => row.formattedStartDate,
                sortable: true,
                cell: (row) =>
                    row.formattedStartDate
                        ? new Date(
                              row.formattedStartDate + "T00:00:00Z"
                          ).toLocaleDateString("fr-FR")
                        : "",
            },
            {
                name: "Department",
                selector: (row) => row.department,
                sortable: true,
            },
            {
                name: "Date of Birth",
                selector: (row) => row.formattedDateOfBirth,
                sortable: true,
                cell: (row) =>
                    row.formattedDateOfBirth
                        ? new Date(
                              row.formattedDateOfBirth + "T00:00:00Z"
                          ).toLocaleDateString("fr-FR")
                        : "",
            },
            {
                name: "Street",
                selector: (row) => row.street,
                sortable: true,
            },
            {
                name: "City",
                selector: (row) => row.city,
                sortable: true,
            },
            {
                name: "State",
                selector: (row) => row.state,
                sortable: true,
            },
            {
                name: "Zip Code",
                selector: (row) => row.zipCode,
                sortable: true,
            },
        ],
        []
    );

    // TODO: Ajouter les états et la logique pour le filtre externe plus tard
    const customStyles = {
        headCells: {
            style: {
                fontWeight: "bold",
                color: "#000",
            },
        },
    };
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            {/* TODO: Ajouter le champ de recherche externe plus tard */}

            <DataTable
                columns={columns}
                data={data}
                noDataComponent={<div>No employees created yet.</div>}
                customStyles={customStyles}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="400px"
                highlightOnHover
            />

            <Link to="/">Home</Link>
        </div>
    );
}

export default EmployeeList;
