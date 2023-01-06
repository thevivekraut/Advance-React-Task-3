import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enetredTitle, setEnetredTitle] = useState('');
    const [enetredAmount, setEnetredAmount] = useState('');
    const [enetredDate, setEnetredDate] = useState('');


    const titleChangeHandler = (event) => {
        setEnetredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnetredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnetredDate(event.target.value);
    };

    return( 
    <form>
        <div className="new-expense__controls">
         <div className="new-expense__controls">
            <label><b>Title</b></label>
            <input type='text' onChange={titleChangeHandler} />
         </div>
         <div className="new-expense__controls">
            <label><b>Amount</b></label>
            <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
         </div>
         <div className="new-expense__controls">
            <label><b>Date</b></label>
            <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
         </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
)};

export default ExpenseForm;