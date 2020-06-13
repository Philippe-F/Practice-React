import React from "react";
import PropTypes from "prop-types";

// In JSX we can use Inline Style which allows us to have our markup, functionality,
// and our styling all within our component. One way to do Inline Styling is within the 
// markup. 

// For example...
//   <div style-{{ backgroundColor: "#f4f4f4" }}> // Pay close attention to the syntax
//     <p>{this.props.todo.title}</p>
//   </div>

// Or we could use variables...
//   //this variable would live outside of the component
//   const itemStyle = {
//     backgroundColor: "#f4f4f4";
//   }

//   <div style={itemStyle}>
//     <p>{this.props.todo.title}</p>
//   </div>

// The way that we are going to do it is to put the style inside of a function. The 
// reason we are doing it this way is because we want the style to change depending 
// on if the Todo is completed or not. 


export class TodoItem extends React.Component {

  getStyle = () => {
    return {
      background: "#f4f4f4",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    }
  }

  render() {
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
  // This requires the component to have a prop named "todo" that is an object
}

export default TodoItem
