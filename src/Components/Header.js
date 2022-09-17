import React from 'react'
import { useContext } from 'react'
import TodoContext from '../Context/TodoContext'

function Header() {
    const { allTodos, setAllTodos,setSpinnerControll,spinnerControll } = useContext(TodoContext)
  return (
    <div className='text-4xl flex justify-center text-orange-500 font-bold '>Hoşgeldin {localStorage.getItem("name")} !</div>
  )
}

export default Header