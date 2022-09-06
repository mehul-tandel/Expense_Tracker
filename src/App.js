import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const oldExpenses = [
  {
    id: "e1",
    title: "Games",
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: "e2",
    title: "Clothes",
    amount: 245.52,
    date: new Date(2022, 4, 25),
  },
  {
    id: "e3",
    title: "Drinks",
    amount: 140.34,
    date: new Date(2022, 5, 12),
  },
  {
    id: "e4",
    title: "Trip",
    amount: 3020.94,
    date: new Date(2022, 5, 24),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(oldExpenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
