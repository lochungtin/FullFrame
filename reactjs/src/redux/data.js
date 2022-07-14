import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        active: {},
        archive: {},
        activeCount: 0,
        archiveCount: 0,
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
            state.activeCount = Object.keys(action.payload).length;
        },
        setArchive: (state, action) => {
            state.archive = action.payload;
            state.archiveCount = Object.keys(action.payload).length;
        },
    },
});

export const { setActive, setArchive } = dataSlice.actions;

export default dataSlice.reducer;
