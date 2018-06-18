import React from 'react';


const Expense = (props)=>{
    return(
         <li>{props.description} {props.amount}$ <span className="created">{props.createdAt}</span></li> 
    )
}

export default Expense;