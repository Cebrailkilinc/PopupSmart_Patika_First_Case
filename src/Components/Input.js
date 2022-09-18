import axios from 'axios'
import React from 'react'
import { useEffect, useState, useContext } from 'react'
import TodoContext from '../Context/TodoContext'

function Input() {

  const {allTodos, setAllTodos,spinnerControll, setSpinnerControll,todoContent, setTodoContent} =useContext(TodoContext)

 

  const data = {
    content: todoContent   
}

 const addNewTodo = ()=>{
   if (todoContent.length >3) {
    setSpinnerControll(true)
    axios.post("https://63218fb7fd698dfa29fa23e1.mockapi.io/todos", data).then(result =>{
    
      setSpinnerControll(false)
      setAllTodos((previous)=>([...previous, result.data]))  
    })
    setTodoContent("")
     
   }else{
     window.alert("Todo İçeriği kısa olamaz !!!")
   }
 }
  
  return (
    <div className='flex items-center mt-14 gap-3'>
        <input onChange={(e)=>{setTodoContent(e.target.value)}} value={todoContent} className=" w-60 sm:w-80 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Add new todo..."/>
        <button onClick={addNewTodo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add</button>
    </div>
  )
}

export default Input