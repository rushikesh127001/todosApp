import React, {useState} from "react";
import { FaSignInAlt} from "react-icons/fa";

const SignIn=(props)=>{
    const [inputText,setInputText]=useState({
            email:"",
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
            // props.addTodoItem(inputText.title)
            setInputText({title:""})
        }
        else {
            alert("Please input a Email  Address")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="signin-container">
            <input
                name={"title"}
                type={"text"}
                placeholder={"Enter YourEmailAddress"}
                value={inputText.title}
                onChange={onChange}
                className="input-text"
            />
            <button className="input-submit">
                <FaSignInAlt color="darkcyan" size="20px" className="submit-icon" />
            </button>
        </form>
    )
}

export default SignIn