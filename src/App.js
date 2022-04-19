import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const DummyData = [
  // {
  //   id: 'e1',
  //   title: 'Toilet Paper',
  //   amount: 94.12,
  //   date: new Date(2020, 7, 14),
  // },
  // { id: 'e2',
  // title: 'New TV',
  //   amount: 799.49,
  //    date: new Date(2021, 2, 12) },
  // {
  //   id: 'e3',
  //   title: 'Car Insurance',
  //   amount: 294.67,
  //   date: new Date(2021, 2, 28),
  // },
  
];

function App() {
  const [expenses,setExpenses]=useState(DummyData);
  
  const addExpenseHandler=(expense)=>{
      setExpenses((prevExpenses)=>{
        return [expense,...prevExpenses]
      });
  };
  return (
    <div className=" bg-black h-auto min-h-screen p-1 sm:p-8 overflow-hidden">
      <NewExpenses onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
