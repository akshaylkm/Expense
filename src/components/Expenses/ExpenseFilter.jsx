import React from 'react'

function ExpenseFilter(props) {
  const dropeDownChangeHandler=(event)=>{
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className=' bg-yellow-400 h-36 rounded-md shadow-2xl mb-6 px-8 flex justify-between items-center'>
        <label className=' font-medium text-lg'>FILTER</label>
        <select className=' w-24 h-8 text-center rounded-lg' value={props.filteredYear} onChange={dropeDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2022">2023</option>
          <option value="2022">2024</option>
          <option value="2022">2022</option>
          <option value="2022">2022</option>
        </select>
    </div>
  )
}

export default ExpenseFilter