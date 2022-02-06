import React from "react";
import Header from "./Header";
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
    handleChange = (id) => {
        console.log('handleChange: ' + id);
        this.setState(preState => {
            return {
                todos: preState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo;
                })
            }
        });
    };
    handleDelete = (id) => {
        console.log('handleDelete: ' + id);
        this.setState(preState => {
            return {
                todos: [
                    ...this.state.todos.filter(todo => {
                        return todo.id !== id;
                    })
                ]
            }
        });
    };
    render() {
        return (
            <div>
                <Header></Header>
                <TodoList 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange} 
                    handleDeleteProps={this.handleDelete}
                />
            </div>
        )
    }
}
export default TodoContainer
