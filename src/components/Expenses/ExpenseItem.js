import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'; 
import Card from '../UI/Card'; 
import './ExpenseItem.css';

const ExpenseItem = ({props}) => {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const titleHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  const amountHandler = () => {
    setAmount('100');
  }

  const DeleteHandler = () => {
    console.log('Clicked Delete');
  };

  return (
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>
     <ExpenseDetails title={title} amount={amount}/>
     <button onClick={DeleteHandler}>Delete</button>
     <button onClick={titleHandler}>Change Title</button>   
     <button onClick={amountHandler}>Change Amount</button>   
     </Card>  
  );  
}  

export default ExpenseItem;
