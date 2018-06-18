import React from 'react';
import Income from './Income';
import TotalIncomes from './TotalIncomes';

const Incomes = (props)=>{
  const incomes = props.incomes.map((inc, i)=>{
    return  <Income key={i} {...inc} />
  });
    return(
        <div className="incomes">
          <h2>Incomes:</h2>
          {
              props.incomes.length === 0 ? 
                <p>No incomes</p> :
            <ol>
              {incomes}
            </ol>
          }  
          <TotalIncomes incomes={props.incomes}/>
        </div>
    )
}

export default Incomes;