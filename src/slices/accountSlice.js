import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    amount : 1,
}

export const accountSlice = createSlice(
    {
        name:'account',
        initialState,
        reducers:{
            increment:(state,actions)=>{
                // immer lib
                // immer lib create there copy and implement internally
                state.amount+=1;
            },
            decrement:(state,actions)=>{
                state.amount-=1;
            },
            incrementByPayload:(state,actions)=>{
                state.amount+=actions.payload;
            },
        }
    }
)
// Action creators are generated for each case reducer function
export const { increment, decrement , incrementByPayload } = accountSlice.actions;


export default accountSlice.reducer;