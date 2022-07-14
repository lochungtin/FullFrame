import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        active: {},
        archive: {}
    },
    reducers: {
        addActive: (state) => {
            state.value += 1
        },
        addArchive: (state) => {
            state.value -= 1
        },
        clearActive: (state, action) => {
            
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer