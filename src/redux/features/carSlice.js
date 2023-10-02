import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cars: []
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        SET_CARS(state, action) {
            state.cars = action.payload
        }
    }
});

export const { SET_CARS } = carSlice.actions

export default carSlice.reducer