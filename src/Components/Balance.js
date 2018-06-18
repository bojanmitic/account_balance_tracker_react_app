import React from 'react';

const Balance = (props) => {
    let expenses = props.expenses.map((exp, i)=>(exp.amount)).reduce((acc,val)=> (acc + parseFloat(val)),0);  
    let incomes = props.incomes.map((inc, i)=>(inc.amount)).reduce((acc,val)=> (acc + parseFloat(val)),0);
    return (
        <div className="balance">
            <h1>Balance is:{incomes - expenses}$</h1>
        </div>
    )
}

export default Balance;
