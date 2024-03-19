import React from 'react';

function Card({ data }) {
  const { trans_date_trans_time, merchant, category, first, last, trans_num } = data;

  return (
    <div className='card'>
      <div className="card-header">
        <h2>Transaction Details</h2>
      </div>
      <div className="card-body">
        <ul>
          <li>Transaction ID: {trans_num}</li>
          <li>Transaction Date and Time: {trans_date_trans_time}</li>
          <li>Sender Name: {first + " " + last}</li>
          <li>Recipient Name: {merchant}</li>
          <li>Category: {category}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
