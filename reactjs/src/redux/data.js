import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        active: {},
        archive: {}
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setArchive: (state, action) => {
            state.archive = action.payload;
        },
    },
});

export const { setActive, setArchive } = dataSlice.actions;

export default dataSlice.reducer;
