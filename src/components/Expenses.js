import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Expenses.css";

const Expenses = (props) => {
  const exp = props.items;
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
