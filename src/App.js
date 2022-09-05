import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
