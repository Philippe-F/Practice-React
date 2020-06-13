import React from "react";

export class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}

export default TodoItem
