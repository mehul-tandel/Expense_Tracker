import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const exp = props.items;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={exp[0].title}
          amount={exp[0].amount}
          date={exp[0].date}
        />
        <ExpenseItem
          title={exp[1].title}
          amount={exp[1].amount}
          date={exp[1].date}
        />
        <ExpenseItem
          title={exp[2].title}
          amount={exp[2].amount}
          date={exp[2].date}
        />
        <ExpenseItem
          title={exp[3].title}
          amount={exp[3].amount}
          date={exp[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
