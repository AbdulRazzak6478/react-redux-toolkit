import { createReducer ,createAction} from "@reduxjs/toolkit";

export const increment=createAction('reward/increment')
export const incrementByAmount=createAction('reward/incrementBtAmount')
const initialState = {
    points :15,
}

const rewardReducer = createReducer(initialState,(builder)=>{
    builder
        .addCase(increment, (state,action)=>{
            state.points++
        })
        .addCase(incrementByAmount, (state,action)=>{
            state.points+=action.payload
        })
})

export default rewardReducer;