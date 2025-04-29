// src/store/employeesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // On utilisera un tableau pour stocker la liste des employés
    list: [],
    // TODO: Ajouter d'autres états si nécessaire (ex: loading, error)
};

export const employeesSlice = createSlice({
    name: "employees", // Nom du slice, utilisé dans les types d'action
    initialState,
    reducers: {
        // Définition des actions et comment elles modifient l'état
        addEmployee: (state, action) => {
            // action.payload contiendra l'objet employé à ajouter
            // Redux Toolkit utilise Immer en interne, ce qui nous permet d'écrire
            // du code qui "mute" l'état ici, mais il sera géré de manière immutable.
            state.list.push(action.payload);
        },
        // TODO: Ajouter d'autres reducers si besoin (ex: pour initialiser la liste, supprimer, etc.)
    },
});

// Exporter les actions générées par createSlice
export const { addEmployee } = employeesSlice.actions;

// Exporter le reducer généré par createSlice
export default employeesSlice.reducer;
