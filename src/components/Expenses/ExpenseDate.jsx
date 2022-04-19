import React from 'react'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
  return (
    <div className=" basis-1/4">
          <div className=' bg-red-600 w-16 sm:w-32 text-sm sm:text-xl p-2 text-center rounded-lg border-2'>
          <h1>{day}</h1>
          <h1>{month}</h1>
          <h1>{year}</h1>
          </div>
        </div>
  )
}

export default ExpenseDate;