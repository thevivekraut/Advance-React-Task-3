import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnetredTitle] = useState("");
  const [enteredAmount, setEnetredAmount] = useState("");
  const [enteredDate, setEnetredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnetredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnetredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnetredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);
    setEnetredTitle('');
    setEnetredAmount('');
    setEnetredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>
            <b>Title</b>
          </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>
            <b>Amount</b>
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>
            <b>Date</b>
          </label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
