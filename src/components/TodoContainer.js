import React from "react";
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid";
class TodoContainer extends React.Component{
    state = {
        todos: []
    };
    handleChanges=(id)=>{
        console.log("click",id)
        this.setState(prevState=>({
            todos:prevState.todos.map(todo=>{
                if(todo.id===id){
                    return {
                        ...todo,
                        completed:!todo.completed

                    }
                }
                return todo
            })
        }))
    }
    // delTodo=(id)=>{
    //     this.setState(prevState=>{
    //         return {
    //             todos:prevState.todos.filter(todoItem=>{
    //                 return todoItem.id!==id
    //         })
    //         }
    //     })
    // }
    delTodo=(id)=>{
        this.setState(
            {
                todos: [
                    ...this.state.todos.filter(todoItem=>{
                        return todoItem.id!==id
                    })
                ]
            }
        )
    }
    addTodoItem=(title)=>{
        console.log(title,"x")
        const newTodo={
            id: uuidv4(),
            title:title,
            complete:false
        }
        this.setState({
            todos:[...this.state.todos,newTodo]
        })
    }
    updateTodo=(updatedText,id)=>{
        console.log(updatedText,id)
        this.setState({
            todos:this.state.todos.map(todoItem=>{
                if (todoItem.id===id){
                    todoItem.title=updatedText
                }
                return todoItem
            })
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.todos!==this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos",temp)
        }
    }
    componentDidMount() {
        const localTodos=JSON.parse(localStorage.getItem("todos"))

        if(localTodos){
            this.setState({
                todos:localTodos
            })
        }
    }

    render() {
        return(
            <div className={"container"}>
                <div className={"inner"}>
                    <Header/>
                    <InputTodo addTodoItem={this.addTodoItem}/>
                    <TodosList
                        todos={this.state.todos}
                        handleChaangess={this.handleChanges}
                        delTodo={this.delTodo}
                        updateTodo={this.updateTodo}
                    />
                </div>
            </div>

        )
    }
}
export default TodoContainer