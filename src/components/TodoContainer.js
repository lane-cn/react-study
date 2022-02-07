import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import Header from "./Header";
import TodoList from "./TodoList";
import InputTodo from "./InputTodo";

const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitData());

    function getInitData() {
        // get data from localStorage
        const json = localStorage.getItem("todos");
        const todos = JSON.parse(json);
        return todos ? todos : [];
    };

    const handleAdd = (title) => {
        console.log("handleAdd: " + title);
        const t = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, t]);
    };

    const handleChange = (id) => {
        console.log('handleChange: ' + id);
        setTodos(preTodos => {
            return preTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                } else {
                    return todo;
                }
            });
        });
    };

    const handleDelete = (id) => {
        console.log('handleDelete: ' + id);
        setTodos(preTodos => {
            return preTodos.filter(todo => {
                return todo.id !== id;
            });
        });
    };

    const handleUpdate = (id, title) => {
        console.log('handleUpdate: ' + id + ', title: ' + title);
        setTodos(preTodos => {
            return preTodos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title: title
                    };
                } else {
                    return todo;
                }
            });
        });
    };

    useEffect(() => {
        console.log('didUpdate');
        
        // save data into localStoragge
        const json = JSON.stringify(todos);
        localStorage.setItem("todos", json);
    }, [todos]);

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo handleAddProps={handleAdd} />
                <TodoList 
                    todos={todos} 
                    handleChangeProps={handleChange} 
                    handleDeleteProps={handleDelete}
                    handleUpdateProps={handleUpdate}
                />
            </div>
        </div>
    )
}

export default TodoContainer
