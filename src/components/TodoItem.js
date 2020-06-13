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

// Lets talk about "Prop Drilling"
//   Since we are not using a state manager like Redux or the Context API we have to pass 
//   props up the DOM tree. We have our state inside of our App.js file so we cannot say 
//   "this.setState" and change the completed value to true. We have to go from TodoItem 
//   to Todos, then into App.js. The way that we do that is through props; we create methods 
//   inside of our props and call those methods. 

export class TodoItem extends React.Component {

  getStyle = () => {
    return {
      background: "#f4f4f4",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      borderBottom: "1px #ccc dotted"
    }
  }

  // Fun Fact:
  // The reason we are using arrow functons is because arrow functions do not require us 
  // to bind "this". 

  render() {
    // pulls out values from this.props.todo so we dont have to continue 
    // delcaring "this"
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* We are binding this to the markComplete method to pass the todo id up 
          the DOM tree */}
          <input type="checkbox" onChange={this.props.markComplete.bind
            (this, id)}/> { " " }
          { title }
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
  // This requires the component to have a prop named "todo" that is an object
}

export default TodoItem
