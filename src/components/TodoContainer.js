import React from "react";
import TodoList from "./TodoList";
class TodoContainer extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy a live site",
                completed: false
            }
        ]
    };
    render() {
        return (
            <div>
                <TodoList todos={this.state.todos}></TodoList>
            </div>
        )
    }
}
export default TodoContainer
