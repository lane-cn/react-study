import React, {useState, useEffect} from "react";
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false);

    const handleEditing = (id) => {
        console.log("handleEditing: " + id)
        setEditing(true);
    };

    const onChange = (e) => {
        var key = props.todo.id;
        var value = e.target.value;
        console.log("onChange: " + value + ", id: " + key);
        props.handleUpdateProps(key, value);
    };

    const handleUpdateDone = (e) => {
        if (e.key === 'Enter') {
            console.log('key down: ' + e.key);
            setEditing(false);
        }
    };

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    };

    useEffect(() => {
        return () => {
            console.log('TodoItem componentWillUnmount');
        };
    }, []);

    const {id, title, completed} = props.todo;

    let viewMode = {};
    let editMode = {};
    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    return (
        <li className={styles.item}>
        <div 
            onDoubleClick={() => handleEditing(id)} 
            style={viewMode}
        >
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={() => props.handleChangeProps(id)}
                className={styles.checkbox}
            />
            <span style={completed ? completedStyle : null}>
                {title}
            </span>
            <button onClick={() => props.handleDeleteProps(id)}>
                <FaTrash style={{color: "orangered", fontSize: "16px"}} />
            </button>
        </div>
        <input 
            type="text" 
            className={styles.textInput} 
            style={editMode} 
            value={title} 
            onChange={onChange}
            onKeyDown={handleUpdateDone}
        />
        </li>
    );
};

export default TodoItem
