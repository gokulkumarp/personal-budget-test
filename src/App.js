import './App.css';
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddBudget from './components/addBudget/AddBudget';
import Dashboard from './components/dashboard/dashboard';
import Login from './components/login/Login';
import AddExpense from './components/addExpense/AddExpense';
import Budget from './components/budget/Budget';
import Expense from './components/expense/Expense';
import Register from './components/register/Register';
import Navbar from './components/navBar/NavBar';




function App() {
  return (
    <Router>
 <div className="App">
 <Navbar/>
<Switch>
 
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/user/dashboard" exact component={Dashboard} />
          <Route path="/user/add/budget" exact component={AddBudget} />
          <Route path="/user/add/expense" exact component={AddExpense} />
          <Route path="/user/budgets" exact component={Budget} />
          <Route path="/user/expenses" exact component={Expense} />
          </Switch>
    </div>

    </Router>
   
  );
}

export default App;
