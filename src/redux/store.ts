import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/CounterSlice";


export const store=configureStore({
    reducer:{
        counter: counterReducer
    }
})

console.log(store);
export type RootState=ReturnType<typeof store.getState>

export type AppDispatch=typeof store.dispatch;