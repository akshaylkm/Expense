import React, { useState } from "react";

function NewExpensesForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  };
  return (
    <form className="" onSubmit={submitHandler}>
      <div className=" h-auto bg-stone-500 rounded-2xl p-4 mb-3 shadow-2xl ">
        <div className=" flex flex-col items-center">
          <div>
            <label className=" font-bold text-2xl">TITLE</label>
            <br />
            <input
              className=" w-64 sm:w-96 h-9 rounded-md px-4"
              type="text"
              value={enterdTitle}
              placeholder="Title"
              onChange={titleChangeHandler}
              required
            />
          </div>
          <div>
            <label className=" font-bold text-2xl">AMOUNT</label>
            <br />
            <input
              className=" w-64 sm:w-96 h-9 rounded-md px-4"
              type="number"
              value={enterdAmount}
              placeholder="$"
              onChange={amountChangeHandler}
              required
            />
          </div>
          <div>
            <label className=" font-bold text-2xl">DATE</label>
            <br />
            <input
              className=" w-64 sm:w-96 h-9 rounded-md px-4"
              type="date"
              value={enterdDate}
              placeholder="Title"
              onChange={dateChangeHandler}
              required
            />
          </div>
          <div className=" h-36 flex justify-center items-center">
            <button className=" bg-slate-200 w-32 h-12 rounded-xl sm:hover:w-36 sm:hover:h-14">ADD</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default NewExpensesForm;
