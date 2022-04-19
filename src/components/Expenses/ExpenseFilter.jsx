import React from 'react'

function ExpenseFilter(props) {
  const dropeDownChangeHandler=(event)=>{
    props.onChangeFilter(event.target.value)
  }
  return (
    <div className=' bg-red-300 h-20 sm:h-36 rounded-md shadow-2xl mb-6 px-2 flex justify-between items-center'>
        <label className=' font-bold text-lg'>FILTER</label>
        <select className=' w-24 h-8 text-center rounded-lg' value={props.filteredYear} onChange={dropeDownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2022">2021</option>
          <option value="2022">2020</option>
          <option value="2022">2019</option>
          <option value="2022">2018</option>
        </select>
    </div>
  )
}

export default ExpenseFilter