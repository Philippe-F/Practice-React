import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import './App.css';
import Todos from "./components/Todos"; // importing Todos form components dir
import Header from "./components/layout/Header"; 
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About"; 

// Different components can have their own state, but alot of times your have state 
// that multiple components need to access. Todos need go in a place where we can feed it 
// down to different components. Which is why we put our "Todos" stae into the main app 
// component state. 

// Next we want to take the todos that are in the main App component state below and 
// pass them down into the todos component as a prop. The way we pass props is similar 
// to an HTML attribute. Now, the state that we passed down as props to the embeded
// "Todos" component is accessible within the "Todos" component.

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    }) });
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({
        todos: [...this.state.todos, res.data]
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={ props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            ) }/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
