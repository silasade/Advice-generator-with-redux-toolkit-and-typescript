import { configureStore } from "@reduxjs/toolkit"
import AdviceReducer from "../features/Advice/AdviceSlice"
export const store= configureStore({
    reducer:{
        advice:AdviceReducer
    }
})
export type RootStore=ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch