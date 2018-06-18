import React from 'react';
import moment from 'moment';
import '../Styles/Input.css';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:'',
            amount:'',
            valueOfSelect:'expense',
            createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
        }
    }
    handleChangeDescription = (e)=>{
        let description = e.target.value;
        this.setState({description})
    }
    handleChangeAmount = (e)=>{
        let amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState({amount})
        }
        
    }
    handleSelectChange = (e) =>{
             this.setState({valueOfSelect: e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            alert("Please provide description and amount");
            return false;
        }
        this.props.onSubmit({
                description:this.state.description,
                amount:this.state.amount,
                valueOfSelect:this.state.valueOfSelect,
                createdAt:this.state.createdAt.valueOf()
            })
            this.setState({
                description:'',
                amount:'',
                valueOfSelect:'expense' ,
                createdAt: moment().format('MMMM Do YYYY, h:mm:ss a')
            })
        }
    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                />
                <input 
                    type="text"
                    name="amount"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.handleChangeAmount}
                />
                <select value={this.state.valueOfSelect}  onChange={this.handleSelectChange}>    
                    <option value="expense">Expense</option>
                    <option value="income" >Income</option> 
                </select>
                <button className = "btn-add">Add</button>
            </form>
          </div>
        )
    }
    
}

export default Input;