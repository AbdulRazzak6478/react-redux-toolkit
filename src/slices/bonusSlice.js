import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState ={
    points : 1,
}
const incrementBtAmount = createAction('account/incrementByPayload');

export const bonusSlice = createSlice(
    {
        name:'bonus',
        initialState,
        reducers:{
            increment:(state,actions)=>{
                // immer lib
                // immer lib create there copy and implement internally
                state.points+=1;
            },
            // decrement:(state,actions)=>{
            //     state.amount+=1;
            // },
            // incrementByPayload:(state,actions)=>{
            //     state.amount+=actions.payload;
            // },
        },
        extraReducers:(builder)=>{
            builder.addCase(incrementBtAmount, (state,action)=>{
                // state.points+=action.payload;
                if(action.payload >=100)
                   state.points++;

            })
        }
    }
)
// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;


export default bonusSlice.reducer;