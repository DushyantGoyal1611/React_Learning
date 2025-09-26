import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})


/*
Steps:
create store
wrap app component inside Provider
create slice
register reducer in store
*/