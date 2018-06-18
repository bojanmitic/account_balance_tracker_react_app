import React from 'react';

const Income = (props)=>{
    return (
        <div>
            <li key={props.i}>{props.description} {props.amount}$<span className="created"></span>{props.createdAt}</li>
        </div>
    )
}

export default Income;