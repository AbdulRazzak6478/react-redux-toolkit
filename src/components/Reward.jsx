import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from '../reducers/reward.js';

const Reward = () => {
  const [amt, setAmt] = useState("");
  const points = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();

  function trigger_action() {
    dispatch(incrementByAmount(+amt));
    setAmt("");
  }
  return (
    <>
      <div className="bonus-card card">
        <div className="name">Reward Component</div>
        <p className="amount">Total point :{points}</p>
        <button className="btn" onClick={() => dispatch(increment())} >
          Increment +{" "}
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
      </div>
    </>
  );
};

export default Reward;
