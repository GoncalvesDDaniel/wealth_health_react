import React from "react";
import "../styles/SimpleSelect.css";

/** Un composant simple pour afficher un dropdown natif <select>.
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.label - Le texte du label associé au select.
 * @param {string} props.id - L'id utilisé pour le select et le htmlFor du label.
 * @param {Array<object>} props.options - Tableau d'objets { value: string, label: string } pour les options.
 * @param {string} props.value - La valeur actuellement sélectionnée (doit correspondre à une 'value' d'option).
 * @param {function} props.onChange - La fonction à appeler quand la valeur change (reçoit l'événement).
 */
function SimpleSelect({ label, id, options, value, onChange, placeholder }) {
    return (
        <div className="simple-select">
            <label htmlFor={id}>{label}</label>
            <select id={id} value={value} onChange={onChange}>
                <option value="">{placeholder || `Select ${label}`}</option>
                {/* Mapper sur les options fournies */}
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
