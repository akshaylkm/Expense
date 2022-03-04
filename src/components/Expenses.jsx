import React from 'react'
import ExpenseItems from "./ExpenseItems";
function Expenses(props) {
  return (
    <div>
      <ExpenseItems titel={props.items[0].title} amount={props.items[0].amount} date={props.items[1].date}></ExpenseItems>
      <ExpenseItems titel={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItems>
      <ExpenseItems titel={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItems>
      <ExpenseItems titel={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItems>
    </div>
  );
}

export default Expenses;