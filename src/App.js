import React, { Component } from 'react';
import Header from './Components/Header';
import Input from './Components/Input';
import MiddleDashboard from './Components/MiddleDashboard';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      expenses:[],
      incomes:[]
    }
  }
  handleAdd = (item)=>{
    let expenses = this.state.expenses;
    let incomes = this.state.incomes;
    if(item.valueOfSelect === "income"){
      return this.setState({
        incomes:[...incomes, item]
      })
    }else if(item.valueOfSelect === "expense"){
      return this.setState({
        expenses:[...expenses,item]
      })
    }
  }
  render() {
    console.log(this.state.incomes, this.state.expenses)
    return (
      <div className="App">
       <Header />
       <Input onSubmit={this.handleAdd}/>
       <MiddleDashboard 
                      incomes = {this.state.incomes}
                      expenses = {this.state.expenses}
        />
      </div>
    );
  }
}

export default App;
