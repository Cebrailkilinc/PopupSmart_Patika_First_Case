import { createContext } from "react";
import { useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [allTodos, setAllTodos] = useState([])
    const [spinnerControll, setSpinnerControll] = useState(false)
    const [loginControll, setLoginControll] = useState(false)


const values = {
    allTodos, setAllTodos,
    spinnerControll, setSpinnerControll,
    loginControll, setLoginControll
    
}





    return <TodoContext.Provider value={values} >{children}</TodoContext.Provider>
}


export default TodoContext