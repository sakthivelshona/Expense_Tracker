import { useEffect, useState } from "react";
import ExpenseItem from "./components/ExpenseItem";
import Expenseform from "./components/Expenseform";
import axios from "axios";
const App = () =>{


//Array of Objects with state variable
const [expenses,setexpenses] = useState([])

useEffect(() => {
  axios.get('https://expense-tracker-ril5.onrender.com/entry')
    .then(res => {
      console.log(res.data)
      setexpenses(res.data)
    })
    .catch(err => console.log(err))
}, [])


const addexpense = (title,amount)=>{
  setexpenses([...expenses, {title:title , amount:amount}] )
}

const deleteexpense =(id)=>{
  console.log(id)
  setexpenses(expenses.filter((items) => items.id != id))
}


let income = 0, expense = 0

expenses.forEach((items)=>{
  if(items.amount > 0)
  income += items.amount;

  if(items.amount < 0)
  expense -= items.amount;

})

let balance = income-expense;

//Key is used to update the values easily in the future using 'id'



return (
  <>
  
  <h1>Expense Tracker</h1>
  <div className="balance"><u>Balance : {balance}</u></div>
  <div className="income-expense-container">
    <div className="income">
      <span className="title">Income</span>
      <span>{income}</span>
    </div>

    <div className="block"></div>
      <div className="expense">
        <span className="title">Expense</span>
        <span>{expense}</span>
    </div>
  </div>
  <Expenseform add_all={addexpense}/>

  <div>
 { expenses.map((items)=>{
      return(
        
        <ExpenseItem key = {items.id} {...items} deleteexpense={deleteexpense}/>
      )
    })

  }


{/* Also use this

<ExpenseItem title='Food'amount ={400}/>
<ExpenseItem title='Rent'amount ={10000}/>
 */}



  </div>

  </>
)


}
export default App;
