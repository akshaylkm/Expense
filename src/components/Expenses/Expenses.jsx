import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItems from "./ExpenseItems";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div className=" bg-slate-900 p-1 rounded-lg shadow-2xl">
      <ExpenseFilter
        select={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
