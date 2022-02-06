import React from "react";
class InputTodo extends React.Component {
    state = {
        title: ""
    };
    onChange = (e) => {
        //console.log("onChange: " + [e.target.name] + " = " + [e.target.value]);
        this.setState(preState => {
            return {
                [e.target.name]: e.target.value
            }
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.title);
        if (this.state.title.trim()) {
            this.props.handleAddProps(this.state.title)
            this.setState({
                title: ""
            });
        } else {
            alert('Please input text');
        }
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    name="title"
                    type="text" 
                    placeholder="Add todo ..." 
                    value={this.state.title} 
                    onChange={this.onChange}
                    className="input-text"
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}
export default InputTodo
