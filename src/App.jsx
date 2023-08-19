import { useSelector } from 'react-redux';
import './App.css';
import Accounts from './components/Accounts.jsx';
import Bonus from './components/Bonus.jsx';
import Reward from './components/Reward';

function App() {

  const amount=useSelector(state=>state.account.amount)
  const points=useSelector(state=>state.bonus.points)
  return (
    <>
      <div className="box">
        <div className="title">App</div>
        <div className="account-result layer">
          Current Amount : {amount}
        </div>
        <div className="bonus-result layer">
          Total Bonus: {points}
        </div>
      </div>
      <div className="border">
        <Accounts  />
        <Bonus />
        <Reward />
      </div>
    </>
  );
}

export default App;
