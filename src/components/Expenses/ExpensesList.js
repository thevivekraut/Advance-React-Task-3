import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  if (props.items.length === 1) {
    return <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>;
  }

  return (
    <ul className="expenses-list">
      {
        (props.items.map((props) => (
          <ExpenseItem key={props.title} props={props} />
        )))
      }
    </ul>
  );
};

export default ExpensesList;
