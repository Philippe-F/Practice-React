import React from "react";
import PropTypes from "prop-types";

export class TodoItem extends React.Component {
  render() {
    return (
      <div>
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
