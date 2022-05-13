import React, {useState} from "react";

import styles from "./TodoItem.module.css"
import {FaTrash} from "react-icons/fa";

function TodoItem(props){
    const [editing,setEditing]=useState(false)
    const handleEditing=()=>{
        setEditing(true)
    }
    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(true)
        }
    }
    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }
    const { completed, id, title } = props.todo
    let viewMode={}
    let editMode={}
    if(editing){
        viewMode.display="none"
    }
    else{
        editMode.display="none"
    }

        return (
            <li className={styles.item}>
                <div onDoubleClick={handleEditing} style={viewMode}>
                    <input
                        type={"checkbox"}
                        checked={completed}
                        onChange={()=>props.handlechangesss(id)}
                        className={styles.checkbox}
                    />
                    <button onClick={() => props.delTodo(id)}>
                        <FaTrash />
                    </button>
                    <span style={completed?completedStyle:null}>
                    {title}
                </span>
                </div>
                <input
                    type="text"
                    className={styles.textInput}
                    style={editMode}
                    value={title}
                    onChange={event => {
                        // console.log(event.target.value,id)
                        props.updateTodo(event.target.value,id)
                    }}
                    onKeyDown={handleUpdatedDone}
                />
            </li>
        );


}

// class TodoItem extends React.Component{
//     state = {
//         editing: false,
//     }
//     handleEditing=()=>{
//         this.setState({
//             editing:true
//         })
//     }
//     handleUpdatedDone = event => {
//         if (event.key === "Enter") {
//             this.setState({ editing: false })
//         }
//     }
//     render() {
//         const completedStyle = {
//             fontStyle: "italic",
//             color: "#595959",
//             opacity: 0.4,
//             textDecoration: "line-through",
//         }
//         const { completed, id, title } = this.props.todo
//         let viewMode={}
//         let editMode={}
//         if(this.state.editing){
//             viewMode.display="none"
//         }
//         else{
//             editMode.display="none"
//         }
//         return (
//             <li className={styles.item}>
//                 <div onDoubleClick={this.handleEditing} style={viewMode}>
//                     <input
//                         type={"checkbox"}
//                         checked={completed}
//                         onChange={()=>this.props.handlechangesss(id)}
//                         className={styles.checkbox}
//                     />
//                     <button onClick={()=>this.props.delTodo(this.props.todo.id)}>Delete</button>
//                     <span style={completed?completedStyle:null}>
//                     {title}
//                 </span>
//                 </div>
//                 <input
//                     type="text"
//                     className={styles.textInput}
//                     style={editMode}
//                     value={title}
//                     onChange={event => {
//                        // console.log(event.target.value,id)
//                         this.props.updateTodo(event.target.value,id)
//                     }}
//                     onKeyDown={this.handleUpdatedDone}
//                 />
//             </li>
//         );
//     }
// }
export default TodoItem