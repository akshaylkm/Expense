import React from 'react'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
  return (
    <div className=" basis-1/3">
          <div className=' bg-violet-600 w-32 p-2 text-center rounded-lg border-2'>
          <h1>{day}</h1>
          <h1>{month}</h1>
          <h1>{year}</h1>
          </div>
        </div>
  )
}

export default ExpenseDate;