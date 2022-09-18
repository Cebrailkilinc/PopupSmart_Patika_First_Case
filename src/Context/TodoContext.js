import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [allTodos, setAllTodos] = useState([])
    const [spinnerControll, setSpinnerControll] = useState(false)
    const [loginControll, setLoginControll] = useState(false)
    const [todoContent, setTodoContent] = useState("")
    const [deneme, setDeneme] = useState("")


const values = {
    allTodos, setAllTodos,
    spinnerControll, setSpinnerControll,
    loginControll, setLoginControll,todoContent, setTodoContent,deneme, setDeneme
    
}





    return <TodoContext.Provider value={values} >{children}</TodoContext.Provider>
}


export default TodoContext