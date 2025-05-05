// src/pages/EmployeeList.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DataTable from "react-data-table-component";

function EmployeeList() {
    // const data = useMemo(() => employeesData, [employeesData]);
    const employeesData = useSelector((state) => state.employees.list);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = useMemo(() => {
        if (!searchTerm) {
            return employeesData;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return employeesData.filter((employee) =>
            Object.values(employee).some((value) =>
                String(value).toLowerCase().includes(lowerCaseSearchTerm)
            )
        );
    }, [employeesData, searchTerm]);

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

    const customStyles = {
        headCells: {
            style: {
                fontWeight: "bold",
            },
        },
    };

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div className="search-container">
                <label htmlFor="search">Search:</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <DataTable
                columns={columns}
                data={filteredData}
                noDataComponent={<div>No Data.</div>}
                customStyles={customStyles}
                pagination
                // fixedHeader
                // fixedHeaderScrollHeight="70dvh"
                highlightOnHover
            />

            <Link to="/">Home</Link>
        </div>
    );
}

export default EmployeeList;
