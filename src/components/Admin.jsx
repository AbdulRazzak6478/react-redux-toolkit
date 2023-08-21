import React, { useState } from "react";
import {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from "../api/adminSlice";

const Admin = () => {
  const [amt, setAmt] = useState("");
  // const {data, error, isLoading} = useGetAccountsQuery(3)
  const { data, error, isLoading ,isSuccess} = useGetAccountsQuery();
  const [addAccount, response] = useAddAccountMutation();
  const [deleteAccount, res] = useDeleteAccountMutation();
  const [updateAccount, resp] = useUpdateAccountMutation();
  return (
    <>
      <div className="bonus-card card">
        <div className="name">Admin Component</div>
        {isLoading ? <p>Loading...</p>:null}
        {isSuccess && data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}
              <button className="btn" onClick={() => deleteAccount(account.id)}>
                Delete Account -{" "}
              </button>
              <input
                className="incre"
                type="text"
                onChange={(e) => setAmt(e.target.value)}
                placeholder="Enter Value"
                autoFocus
              />
              <button className="btn" onClick={() => {updateAccount({id:account.id,amount:+amt})}}>
                Update Account {" "}
              </button>
            </p>
          ))}

        {/* <p className='amount'>Total point :{data.id} = {data.amount}</p> */}
        <button
          className="btn"
          onClick={() => addAccount((1 + data.length) * 100, data.length + 1)}
        >
          Add Account +{" "}
        </button>
      </div>
    </>
  );
};

export default Admin;
