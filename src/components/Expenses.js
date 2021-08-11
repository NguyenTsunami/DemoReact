import ExpenseItem from "./components/ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default Expenses;
