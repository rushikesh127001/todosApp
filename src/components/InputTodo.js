import React,{Component} from "react";

class InputTodo extends Component{
    state={
        title:""
    }
    onChange=(e)=>{
        this.setState({
        [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.title.trim()){
            this.props.addTodoItem(this.state.title.trim())
            this.setState({
                title:""
            })
        }
        else {
            console.log("Please Enter A title")
            alert("Please enter title")
        }

    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    name={"title"}
                    type={"text"}
                    placeholder={"Add a TODO"}
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