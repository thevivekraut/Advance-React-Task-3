import React, { useState } from 'react';
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  { 
    id: "1",
    title: "Shopping", 
    amount: 40, 
    date: new Date(2020, 7, 8) 
  },
  { 
    id: "2", 
    title: "Holiday", 
    amount: 400, 
    date: new Date(2022, 7, 4) 
  },
  {
    id: "3",
    title: "Car Service",
    amount: 50,
    date: new Date(2022, 10, 2),
  },
  {
    id: "4",
    title: "Car Insurance",
    amount: 500,
    date: new Date(2022, 3, 5),
  },
];


const App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className=''>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
