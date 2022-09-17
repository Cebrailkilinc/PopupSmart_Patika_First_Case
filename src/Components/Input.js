import axios from 'axios'
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import TodoContext from '../Context/TodoContext'

function Input() {

  const {allTodos, setAllTodos,spinnerControll, setSpinnerControll} =useContext(TodoContext)

  const [todoContent, setTodoContent] = useState("")

  const data = {
    content: todoContent   
}

 const addNewTodo = ()=>{
   setSpinnerControll(true)
  axios.post("https://63218fb7fd698dfa29fa23e1.mockapi.io/todos", data).then(result =>{
    console.log(result.data)
    setSpinnerControll(false)
    setAllTodos((previous)=>([...previous, result.data]))  
  })

 }
  
  return (
    <div className='flex items-center mt-14 gap-3'>
        <input onChange={(e)=>{setTodoContent(e.target.value)}} className=" w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Add new todo..."/>
        <button onClick={addNewTodo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add</button>
    </div>
  )
}

export default Input