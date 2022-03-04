import React from 'react'
import ExpenseDate from './ExpenseDate';

function ExpenseItems(props) {
  
  return (
    <div className=" bg-green-500 h-44 p-3 mb-2 text-2xl font-semibold text-zinc-50 rounded-3xl shadow-2xl flex justify-start items-center">
        <ExpenseDate date={props.date}/>
        <div className=" basis-1/2">
          <h1>{props.titel}</h1>
        </div>
        <div className="">
          <div className=" bg-cyan-400 w-full h-16 p-2 flex rounded-2xl items-center justify-center">
          <h1>${props.amount}</h1>
          </div>
        </div>
      </div>
  )
}

export default ExpenseItems;