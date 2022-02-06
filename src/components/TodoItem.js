import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component {
    
    render() {
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
                    checked={this.props.todo.completed} 
                    onChange={() => this.props.handleChangeProps(this.props.todo.id)}
                    className={styles.checkbox}
                />
                <span style={this.props.todo.completed ? completedStyle : null}>
                    {this.props.todo.title}
                </span>
                <button onClick={() => this.props.handleDeleteProps(this.props.todo.id)}>
                    Delete
                </button>
            </li>
        )
    }
}
export default TodoItem
