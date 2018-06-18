import React from 'react';

const TotalIncomes = (props)=> {
     let incomes = props.incomes.map((inc, i)=>(inc.amount)).reduce((acc,val)=> (acc + parseFloat(val)),0);
    return (
        <div className="totalIncomes">
            <h2>Total incomes are: {incomes}$</h2>
        </div>
    )
}

export default TotalIncomes;