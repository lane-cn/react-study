import React, {useState} from "react";

const InputTodo = (props) => {
    const [inputText, setInputText] = useState({
        title: ""
    });
    
    const onChange = (e) => {
        setInputText(preState => {
            return {
                ...preState,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.handleAddProps(inputText.title);
            setInputText({
                title: ""
            });
        } else {
            alert('Please input text');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input 
                name="title"
                type="text" 
                placeholder="Add todo ..." 
                className="input-text"
                value={inputText.title}
                onChange={onChange}
            />
            <button className="input-submit">Submit</button>
        </form>
    )
}

export default InputTodo
