import React from "react";
import TodoItem from "./TodoItem"

class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem key={todo.id}
                              todo={todo}
                              handlechangesss={this.props.handleChaangess}
                              delTodo={this.props.delTodo}
                              updateTodo={this.props.updateTodo}
                    />
                ))}
            </ul>
        )
    }
}

export default TodosList