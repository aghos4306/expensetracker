import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionLIst = () => {
  //transactions is an arry, map through and display into li as separate component
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-£400</span>
            <button className="delete-btn">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionLIst;
