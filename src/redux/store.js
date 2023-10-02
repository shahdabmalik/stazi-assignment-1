import { configureStore } from "@reduxjs/toolkit";

import carReducer from "./features/carSlice"
import searchReducer from "./features/searchSlice"


const store = configureStore({
    reducer: {
        car: carReducer,
        search: searchReducer
    }
})

export default store