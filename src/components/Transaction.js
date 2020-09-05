import React from 'react';

export const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text} <span>-£400</span>
      <button className="delete-btn">X</button>
    </li>
  );
};

export default Transaction;
