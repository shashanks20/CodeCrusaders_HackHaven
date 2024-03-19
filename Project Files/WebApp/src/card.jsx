import React from 'react';

// function Card({ data }) {
function Card() {
  // const { text, location, severity, time, commenting, staring, groping } = data;

  // const getShadowClass = (severity) => {
  //   switch (severity) {
  //     case 'High':
  //       return 'shadow-inner-red';
  //     case 'Medium':
  //       return 'shadow-inner-yellow';
  //     case 'Low':
  //       return 'shadow-inner-blue';
  //     default:
  //       return '';
  //   }
  // };

  return (
    <div className='card'>
      <div className="card-header">
        <h2>Transaction Details</h2>
      </div>
      <div className="card-body">
        {/* <p>{text}</p> */}
        <ul>
          <li>Transaction ID: {}</li>
          <li>Transaction Date and Time: {}</li>
          <li>Credit Card Number: {}</li>
          <li>Sender Name: {}</li>
          <li>Recipient Name: {}</li>
          <li>Probability: {}</li>
        </ul>
        <p>
          {/* <a href="https://www.rainn.org/" target="_blank" rel="noopener noreferrer">
            Learn More About Sexual Harassment Helpline
          </a> */}
        </p>

        <div className="feedback">
        <button className="true">V</button>
        <button className="falsePositive">X</button>
        </div>


      </div>
      
    </div>
  );
}

export default Card;
