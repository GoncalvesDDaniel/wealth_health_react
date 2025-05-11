import React from "react";
import "../styles/SimpleSelect.css";

/**A simple component to display a native <select> dropdown.
 * @param {object} props - The component's properties.
 * @param {string} props.label - The text inside the label.
 * @param {string} props.id - The id used for the select.
 * @param {Array<object>} props.options - Selectable options { value: string, label: string }.
 * @param {string} props.value - The currently selected value (must match an option's 'value').
 * @param {function} props.onChange - The function when the value changes (like local state).
 * @param {string} [props.placeholder] - Optional placeholder instade of props.label
 */
function SimpleSelect({ label, id, options, value, onChange, placeholder }) {
    return (
        <div className="simple-select">
            <label htmlFor={id}>{label}</label>
            <select id={id} value={value} onChange={onChange}>
                <option value="">{placeholder || `Select ${label}`}</option>
                {options.map((option, index) => (
                    <option
                        key={`${option.value}-${index}`}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SimpleSelect;
