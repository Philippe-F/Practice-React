// React components let you split the UI into independent, reusable pieces, and think 
// about each piece in isolation. 

import React from "react"; // importing the react library 
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

// Since we have an array of todos we need to loop through them, then output something. 
// In React we use the map method which is a high order array method that can take in an 
// array and return a modified copy of the same array. We are going to use it to loop 
// through the todos array and output JSX. 

// When you map through something it creates a "List" and every item in a list 
// should have a unique key, which is why we pass a key prop down to "TodoItem".

class Todos extends React.Component {

  render() {
    return (
      this.props.todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}/> 
        // passing the todo object into TodoItem as a prop, so now TodoItem
        // has access to the todo and also passing the markComplete method to 
        // each TodoItem
      ))
    )
  }
}
// "PropTypes" are a validation for properties that a component should have. We can
// set the type and also set them to be required or not. Our Todos Component has a prop
// of "todos" (the prop is passed into the component from the App.js). 

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
  // This requires the component to have a prop named "todos" that is an array
}

export default Todos; 