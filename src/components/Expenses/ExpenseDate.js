import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })
  const year = props.date.getFullYear();

  return(
    <div className="expense-date">
        <div className="expense-dtae__month">{month}</div>
        <div className="expense-dtae__year">{year}</div>
        <div className="expense-dtae__day">{day}</div>
    </div> 
  );
}

export default ExpenseDate;