import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insuance",
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
