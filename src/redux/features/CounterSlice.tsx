import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface CounterState {
  count: number
}

  const initialState:CounterState={
        count:0
    }
export const CounterSlice =createSlice({
    name:'counter',
    initialState,
    reducers:{
      increament:(state)=>{
          state.count=state.count+1  
      },
      decreament:(state)=>{
           state.count=state.count-1  
      },
      test:(state,action: PayloadAction<number>)=>{
        state.count=state.count+action.payload
      }
    }
   
})

export const {increament, decreament, test}=CounterSlice.actions;  //Auto-generated action creators for reducers
export default CounterSlice.reducer;