import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {
  return (
    <div className=" bg-gray-600 h-auto sm:h-44 p-3 mb-2 text-sm sm:text-2xl font-semibold text-zinc-50 rounded-3xl shadow-2xl flex justify-start items-center">
      <ExpenseDate date={props.date} />
      <div className=" basis-1/2">
        <h1 className=" pl-1">{props.title}</h1>
      </div>
      <div className="">
        <div className=" bg-cyan-400 w-full sm:h-16 p-2 flex rounded sm:rounded-2xl items-center justify-center">
          <h1>${props.amount}</h1>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItems;
