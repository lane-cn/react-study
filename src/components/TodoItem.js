import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component {
    
    render() {
        const {id, title, completed} = this.props.todo;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }
        return (
            <li className={styles.item}>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={() => this.props.handleChangeProps(id)}
                    className={styles.checkbox}
                />
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>
                <button onClick={() => this.props.handleDeleteProps(id)}>
                    Delete
                </button>
            </li>
        )
    }
}
export default TodoItem
