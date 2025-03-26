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

    function starOnboarding() {
        const accessToken = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijd1OHM3byIsImhhc2giOiJjMTc3ZDRmODAwY2IzNmQ5NmMwYzRjY2Q0YWMzMjkxNTJhZmZkYjAxMTFjZGI4Y2M2YjMwNGY4ZWY5MzcwOGNiIiwiaWF0IjoxNzQzMDA0MzAyLCJleHAiOjE3NDMwNDc1MDIsImp0aSI6ImYyMzY0MzA1LTJhY2UtNGIwYS05OWY3LTZmNTNlNGMyZmVmMCJ9.GXrD-5Xobyabc5CwYppQOQ7Ude4pRkXdMZGPj96x6_EVyrKIY3dgyHKJKz6rlmObIhLaZPMgXTsPjmUv8FODA62w4fL9kQ0Src6Vxx84AiDcnGDSZv_6ckopFNf8yR9C0mf8urKyF37-ZGajzVWExXn6ky8ghQq7PjWpGIHb2_4"
  ;
          const hyperKycConfig = new HyperKycConfig(
            accessToken,
            "workflow_bootcamp",
            "hv-test-123123442"
        );
        console.log("values: ",hyperKycConfig)
        const handler = (HyperKycResult) => {
            console.log("HyperKycResult", HyperKycResult)
            if (HyperKycResult.Cancelled) {
                console.log(HyperKycResult.Cancelled);
            } else if (HyperKycResult.Failure) {
                console.log(HyperKycResult.Failure);
            } else if (HyperKycResult.Success) {
                console.log(HyperKycResult.Success);
            }
        }
        HyperKYCModule.launch(hyperKycConfig, handler);
    }


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
<button onClick ={starOnboarding}>Start KYC</button>
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
