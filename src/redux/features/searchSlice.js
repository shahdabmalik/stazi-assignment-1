import { createSlice } from '@reduxjs/toolkit'
import data from "../../data/data.json"

const initialState = {
    searchCars: []
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        SET_SEARCH_CARS(state, action) {
            const cars = data.cars.filter((car) => car.carName.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
            state.searchCars = cars
        }
    }
});

export const { SET_SEARCH_CARS } = searchSlice.actions

export default searchSlice.reducer