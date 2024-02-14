import React from 'react';


function ExpenseItem(props) {
  const{id,title,amount,deleteexpense}= props


  const deleteitm = () =>{
    deleteexpense(id);
        
  }

//negative - red, positive - green
//also use : const {title, amount} = props; in div use {title}

return (
<>
<div className="container">
<div className={`expense-item ${amount > 0? 'positive':'negative'}`} >
    <div className="expense-title" >{title}</div>
    <div className="expense-amount" >{amount}</div>
    </div>
    <button id='delete' onClick={deleteitm}>🗑️</button>
</div>
</>    
  )
}

export default ExpenseItem;