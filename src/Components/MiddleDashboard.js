import React from 'react';
import Expenses from './Expenses';
import Incomes from './Incomes';
import Balance from './Balance';
import '../Styles/MiddleDashboard.css'

const MiddleDashboard = (props) =>{
    return(
        <div className="middleDashboard">
            <Expenses expenses={props.expenses}/>
            <Incomes incomes = {props.incomes}/>
            <Balance 
                        expenses= {props.expenses}
                        incomes = {props.incomes}
            />
        </div>
    )
}

export default MiddleDashboard;