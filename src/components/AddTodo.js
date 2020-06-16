import React, { Component } from 'react'

export class AddTodo extends Component {
  // When we have an inout field usually you're gonna want to have your fields as 
  // as a piece of state for that component. 

  state = {
    title: ""
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title); 
    this.setState({title: ""})
  }

  render() {
    return (
      <form  onSubmit={this.submitTodo} style={{display: 'flex'}}>
        <input type="text" 
          name="title" 
          placeholder="add Todo..." 
          style={{flex: '10', padding: '5px'}}
          value={this.state.title}
          // as you type into this field an onChange event is fired off so we need 
          // to handle it (update the state) with an onChange handler
          onChange={this.onChange}
        />

        <input 
          type="submit" 
          value="Submit" 
          className="btn" 
          style={{flex: '1'}}
          onClick={this.submitTodo}
        />
      </form>
    )
  }
}

export default AddTodo
