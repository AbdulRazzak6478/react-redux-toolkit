import React, { useState } from "react";
import "../styles/Accounts.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByPayload } from "../slices/accountSlice";



const Accounts = () => {
  const [amt, setAmt] = useState("");
  const amount=useSelector(state=>state.account.amount)
  const points=useSelector(state=>state.bonus.points)
  const dispatch=useDispatch()
  function trigger_action() {
    // setAmount((prevState)=>prevState + (+amt));
    dispatch(incrementByPayload(+amt));
    setAmt("");
  }
 function init()
  {
    // dispatch(actions.init_action2(3));
    // dispatch(actions.initUser(amt)) 
    setAmt('')
  }
  return (
    <>
      <div className="card border">
        <div className="name">Account Component</div>
        <p className="amount">Amount : $ {amount}</p>
        <div className="btns">
          <button className="btn" onClick={()=>dispatch(increment())}>
            Increment +{" "}
          </button>
          <button
            className="btn"
            onClick={()=>dispatch(decrement())}
          >
            Decrement -{" "}
          </button>
          <input
            className="incre"
            type="text"
            value={amt}
            onChange={(e) => setAmt(e.target.value)}
            placeholder="Enter Value"
            autoFocus
          />
          <button className="btn" onClick={trigger_action}>
            Increment By {amt.length==0 ?0:amt} +
          </button>
          {/* <button className="btn"
           >
            Get user amount
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Accounts;
