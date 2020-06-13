// React components let you split the UI into independent, reusable pieces, and think 
// about each piece in isolation. 

import React from "react"; // importing the react library 
import TodoItem from "./TodoItem";

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
        <TodoItem key={todo.id} todo={todo} /> 
        // passing the todo object into TodoItem as a prop, so now TodoItem
        // has access to the todo
      ))
    )
  }
}

export default Todos; 