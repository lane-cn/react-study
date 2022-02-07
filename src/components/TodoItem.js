import React from "react";
import styles from "./TodoItem.module.css";
class TodoItem extends React.Component {
    state = {
        editing: false
    };
    handleEditing = (id) => {
        console.log("handleEditing: " + id)
        this.setState({
            editing: true
        });
    };
    onChange = (e) => {
        var id = this.props.todo.id;
        var title = e.target.value;
        console.log("onChange: " + e.target.value + ", id: " + id);
        this.props.handleUpdateProps(id, title);
    };
    handleUpdateDone = (e) => {
        if (e.key === 'Enter') {
            console.log('key down: ' + e.key);
            this.setState({
                editing: false
            });
        }
    };
    render() {
        const {id, title, completed} = this.props.todo;
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        };
        
        let viewMode = {};
        let editMode = {};
        if (this.state.editing) {
            viewMode.display = "none";
        } else {
            editMode.display = "none";
        }

        return (
            <li className={styles.item}>
                <div 
                    onDoubleClick={() => this.handleEditing(id)} 
                    style={viewMode}
                >
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
                </div>
                <input 
                    type="text" 
                    className={styles.textInput} 
                    style={editMode} 
                    value={title} 
                    onChange={this.onChange}
                    onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}
export default TodoItem
