import React from "react";
import {v4 as uuidv4} from "uuid";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";
class TodoContainer extends React.Component {
    state = {
        todos: []
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
    handleUpdate = (id, title) => {
        console.log('handleUpdate: ' + id + ', title: ' + title);
        this.setState(preState => {
            return {
                todos: preState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            title: title,
                        }
                    }
                    return todo;
                })
            };
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
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo handleAddProps={this.handleAdd} />
                    <TodoList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange} 
                        handleDeleteProps={this.handleDelete}
                        handleUpdateProps={this.handleUpdate}
                    />
                </div>
            </div>
        )
    };
    componentDidMount() {
        console.log('TodoContainer componentDidMount');
        const json = localStorage.getItem("todos");
        const ts = JSON.parse(json);
        if (ts) {
            this.setState({todos: ts});
            console.log("load from localstorage: " + ts);
        } else {
            fetch("https://jsonplaceholder.typicode.com/todos?_limit=10").then(response => response.json()).then(data => {
                this.setState({todos: data});
                console.log("load from json placeholder: " + data);
            });
        }
    }
    componentDidUpdate(preProps, preState) {
        console.log('TodoContainer componentDidUpdate');
        if (preState.todos != this.state.todos) {
            const json = JSON.stringify(this.state.todos);
            localStorage.setItem("todos", json);
        }
    }
    componentWillUnmount() {
        console.log('TodoContainer componentWillUnmount');
    }
}
export default TodoContainer
