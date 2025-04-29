import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice"; // 1. Importer le reducer

export const store = configureStore({
    reducer: {
        // 2. Ajouter le reducer au store sous la clé 'employees'
        employees: employeesReducer,
    },
});
