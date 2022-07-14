import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './data';

export default configureStore({
    reducer: {
        data: dataReducer,
    },
});
