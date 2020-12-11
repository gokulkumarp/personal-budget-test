import React, { Component }  from "react";
import axios from 'axios'
export default class AddBudget extends Component {

  constructor(props) {
      super(props)

      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeUserBudget = this.onChangeUserBudget.bind(this);
      this.onChangeUserDate = this.onChangeUserDate.bind(this);

      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          budget: '',
          date:'',
      }
  }

  onChangeUserName(e) {
      this.setState({ name: e.target.value })
  }

  onChangeUserBudget(e) {
      this.setState({ budget: e.target.value })
  }

  onChangeUserDate(e) {
    this.setState({ date: e.target.value })
}
  onSubmit(e) {
      e.preventDefault()

      const userObject = {
          name: this.state.name,
          budget: this.state.budget,
          date:this.state.date

      };

      axios.post('http://localhost:4000/api/budget/create', userObject)
          .then((res) => {
              console.log(res.data)
          }).catch((error) => {
              console.log(error)
          });

      this.setState({ name: '', budget: '', date:'' })
  }


  render() {
      return (
          <div className="addBudget">
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Name</label>
                      <input type="text" value={this.state.name} onChange={this.onChangeUserName} className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>Budget Value</label>
                      <input type="text" value={this.state.budget} onChange={this.onChangeUserBudget} className="form-control" />
                  </div>
                  <div className="form-group">
                      <input type="datetime-local" value={this.state.date} onChange={this.onChangeUserDate} className="form-control" />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Add Budget" className="btn btn-success btn-block" />
                  </div>
              </form>
          </div>
      )
  }
}
