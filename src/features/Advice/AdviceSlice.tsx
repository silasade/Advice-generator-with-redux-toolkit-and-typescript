import { createSlice,createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Advices={
    slip:{ 
        id:number
        advice:string
    }
   
}
type InitialState={
    loading:boolean
    data: Advices
    error:string
}
const initialState:InitialState={
    loading:false,
    data:{slip:{id:0,advice:""}},
    error:""
}
export const fetchAdvice=createAsyncThunk("advice/fetchAdvice",async()=>{
    const response= await axios.get("https://api.adviceslip.com/advice")
    return response.data
})
const AdviceSlice=createSlice({
    name:"advice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchAdvice.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchAdvice.fulfilled,(state,actions:PayloadAction<Advices>)=>{
            state.loading=false
            state.data=actions.payload
            state.error=""
        })
        builder.addCase(fetchAdvice.rejected,(state,actions)=>{
            state.loading=false
            state.data=initialState.data
            state.error=actions.error.message || "Failed to fetch"
        })
    }
    
})
export default AdviceSlice.reducer