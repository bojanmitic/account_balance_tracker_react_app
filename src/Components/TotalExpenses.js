import React from 'react';

const TotalExpenses = (props)=> {
    let expenses = props.expenses.map((exp, i)=>(exp.amount)).reduce((acc,val)=> (acc + parseFloat(val)),0);  
    return (
        <div className="totalExpenses">
            <h2>Total expenses are: {expenses}$</h2>
        </div>
    )
}

export default TotalExpenses;