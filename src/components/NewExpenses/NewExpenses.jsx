import React from 'react'
import NewExpensesForm from './NewExpensesForm'

function NewExpenses(props) {
  const saveExpenseDataHandler = (enterdeExpenseData)=>{
    const expenseData={
      ...enterdeExpenseData,
      id : Math.random().toString()
      
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div>
        <NewExpensesForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpenses