import React, { useState } from 'react'


const Expenseform = (props)=> {

    const {add_all} = props                  //import values
    const [title,settitle] = useState('')
    const [amount, setAmount]=useState(0); 
    const[errors,setErrors] = useState('')

    const additems = (item)=>{
        item.preventDefault()           //prevents form reloading
        console.log(title,amount)

        let err= {}

        if(title===''&& amount===0 ){
            err.title= 'Fill all the details'          
        }
        
        else if(title.length <3)    {           
            err.title = 'Title should be atleast 3 characters long'
        }
        
        else if(!amount)
            err.amount = 'Enter a valid amount'

        if(Object.keys(err).length>0){
            setErrors({...err})
            return               //return - stops the function (break)
        }

        
        add_all(title, parseInt(amount))    //calls the function in App to save expenses


        //Form reset - After entry the title comes to default
        settitle('')
        setAmount(0)     

    }


    //settitle
    const titlechange = (item)=>{
        settitle(item.target.value)   //setting the value of input to state variable     
        setErrors({...errors,'title':''})     //removing error message when user starts typing
        
    }
    
    //setamount
    const amountchange = (item)=>{
        //here number changes into string
        setAmount(item.target.value)        //setting the  value of input to state variable
        setErrors({...errors,'amount':''}) 

    }



  return (
<>
<div className="inpts">
    <input type="text"id='title' placeholder='Title' value={title} onChange={titlechange}/>
    {errors.title ? <div className="error">{errors.title}</div> : null}
    <br />


    <input type="number" placeholder='Amount' id='amount'  value={amount} onChange={amountchange}/>
    {errors.amount ? <div className="error">{errors.amount}</div> : null}
    <br />
    </div>


    <div className="btn">
      <button id ='add'onClick={additems}>Add</button>
    </div>

</>    
  )
}

export default  Expenseform