import React from "react";
import {v4 as uuidv4} from "uuid";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
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
    handleAdd = (title) => {
        console.log("handleAdd: " + title);
        const t = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, t]
        });
    };
    render() {
        return (
            <div>
                <Header />
                <InputTodo handleAddProps={this.handleAdd} />
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
