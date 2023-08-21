import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    amount : 1,
}

export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI)=>{
        const {data} = await axios.get(`http://localhost:8080/accounts/${userId}`);
        return data.amount;
    }
)

// fetchUserId(userId)

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
        }, 
        extraReducers:(builder)=>{
            builder.addCase(getUserAccount.fulfilled,(state,action)=>{
                state.amount=action.payload;
                state.pending=false;
            })
            .addCase(getUserAccount.rejected,(state,action)=>{
                state.amount="rejected"
                state.error=action.error
                state.pending=false;
            })
            .addCase(getUserAccount.pending,(state,action)=>{
                state.amount="pending"
                state.pending=true
            })
        }
    }
)
// Action creators are generated for each case reducer function
export const { increment, decrement , incrementByPayload } = accountSlice.actions;


export default accountSlice.reducer;