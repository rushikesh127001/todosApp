// import React, { useState } from "react"
//
// const InputTodo = props => {
//     const [inputText, setInputText] = useState({
//         title: "",
//     })
//
//     const onChange = e => {
//         setInputText({
//             ...inputText,
//             [e.target.name]: e.target.value,
//         })
//     }
//
//     const handleSubmit = e => {
//         e.preventDefault()
//         if (inputText.title.trim()) {
//             props.addTodoItem(inputText.title)
//             setInputText({
//                 title: "",
//             })
//         } else {
//             alert("Please write item")
//         }
//     }
//
//     return (
//         <form onSubmit={handleSubmit} className="form-container">
//             <input
//                 type="text"
//                 className="input-text"
//                 placeholder="Add todo..."
//                 value={inputText.title}
//                 name="title"
//                 onChange={onChange}
//             />
//             <button className="input-submit">Submit</button>
//         </form>
//     )
// }


import React, {useState} from "react";
import {FaPlusCircle} from "react-icons/fa";

const InputTodo=(props)=>{
    const [inputText,setInputText]=useState({
        title:"",
    }
    )

    const onChange=(e)=>{
        setInputText({
            ...inputText,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=e=>{
        e.preventDefault()
        if(inputText.title.trim()){
            props.addTodoItem(inputText.title)
            setInputText({title:""})
        }
        else {
            alert("Please input a  TODO title")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                name={"title"}
                type={"text"}
                placeholder={"Add a TODO"}
                value={inputText.title}
                onChange={onChange}
                className="input-text"
            />
            <button className="input-submit">
                <FaPlusCircle color="darkcyan" size="20px" className="submit-icon" />
            </button>
        </form>
    )
}

// class InputTodo extends Component{
//     state={
//         title:""
//     }
//     onChange=(e)=>{
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }
//     handleSubmit=(e)=>{
//         e.preventDefault()
//         if(this.state.title.trim()){
//             this.props.addTodoItem(this.state.title.trim())
//             this.setState({
//                 title:""
//             })
//         }
//         else {
//             console.log("Please Enter A title")
//             alert("Please enter title")
//         }
//
//     }
//     render() {
//         return(
//             <form onSubmit={this.handleSubmit} className="form-container">
//                 <input
//                     name={"title"}
//                     type={"text"}
//                     placeholder={"Add a TODO"}
//                     value={this.state.title}
//                     onChange={this.onChange}
//                     className="input-text"
//                 />
//                 <button className="input-submit">Submit</button>
//             </form>
//         )
//     }
// }


export default InputTodo