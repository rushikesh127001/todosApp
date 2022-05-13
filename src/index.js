import React from "react"
import ReactDom from "react-dom"

import TodoContainer from "./components/TodoContainer"

import "./App.css"
import {BrowserRouter} from "react-router-dom";

ReactDom.render(
    <React.StrictMode>
        <BrowserRouter>
            <TodoContainer/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
)