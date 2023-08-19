import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';

const Bonus = () => {
  const points = useSelector(state=>state.bonus.points)
  const dispatch=useDispatch();
  return (
   <>  
    <div className="bonus-card card">
        <div className="name">Bonus Component</div>
        <p className='amount'>Total point :{points}</p>
          <button className='btn' onClick={()=>dispatch(increment())}>Increment + </button>
      </div>
   </>
  )
}

export default Bonus;