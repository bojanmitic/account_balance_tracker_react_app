import  React  from 'react';
import Expense from './Expense';
import TotalExpenses from './TotalExpenses';

const Expenses = (props)=>{
    const expenses = props.expenses.map((exp,i)=>{
        return  <Expense key={i} {...exp}/>
      });
    return(
        <div className="expenses">
          <h2>Expenses:</h2>
          {
              props.expenses.length === 0 ? (
                  <p>No Expenses</p>
              ) : (
                <ol>
                    {expenses}
                </ol>
              )
          }
          <TotalExpenses expenses = {props.expenses} />
          
        </div>
    )
}

export default Expenses;

