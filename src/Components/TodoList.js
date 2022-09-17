import React from 'react'
import { useEffect, useState, useContext } from 'react'
import axios from "axios"
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai"
import { TiTick } from "react-icons/ti"
import TodoContext from '../Context/TodoContext'
import Spinner from './Spinner'

function TodoList() {

    const { allTodos, setAllTodos,setSpinnerControll,spinnerControll } = useContext(TodoContext)


    const [postId, setPostId] = useState("")
    const [todoComplete, setTodoComplete] = useState("")

    useEffect(() => {
        setSpinnerControll(true)
        axios.get("https://63218fb7fd698dfa29fa23e1.mockapi.io/todos")
            .then(result => {
                setAllTodos(result.data)
                setSpinnerControll(false)
            })
    }, [])

    const deletePost = (id) => {
        setSpinnerControll(true)
        setPostId(id)
        axios.delete("https://63218fb7fd698dfa29fa23e1.mockapi.io/todos/" + id)
            .then(result =>{                           
                const todos = allTodos.filter(item => item.id !== id);
                setSpinnerControll(false)
                setAllTodos(todos)  
            })  
        }            
            
  
    const datas = {
        isCompleted: true
    }
    const handleComplete = (id) => {
        setSpinnerControll(true)
        axios.put("https://63218fb7fd698dfa29fa23e1.mockapi.io/todos/" + id, datas)
            .then(result => {              
                setSpinnerControll(false)
                console.log(result.data)
                setTodoComplete("line-through")
         })
    }


    return (
        <div>       
            {spinnerControll ? <Spinner/> : null}              
            {
                allTodos.map((item, i) => {
                    return (
                        <div className={`flex w-96 items-center justify-between p-2 px-3 mt-3 bg-violet-400 rounded-3xl  mb-20`} key={i}>
                            {
                                item.isCompleted ? <span className={`text-neutral-700 ${todoComplete} `}>{item.content}</span> : <span>{item.content}</span>
                            }                            

                            <div className='flex items-center gap-5'>
                                <TiTick color='white' size={25} onClick={() => { handleComplete(item.id) }} className='cursor-pointer' />
                                <AiFillEdit color='white' size={20} className='cursor-pointer' />
                                <AiTwotoneDelete color='white'  size={20} onClick={() => deletePost(item.id)} className='cursor-pointer ' />
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default TodoList