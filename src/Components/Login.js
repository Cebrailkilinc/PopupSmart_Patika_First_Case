import React from 'react'
import { useState, useContext } from 'react'
import TodoContext from '../Context/TodoContext'

function Login() {
    const { loginControll, setLoginControll } = useContext(TodoContext)
    const [userName, setUserName] = useState("")
    localStorage.setItem("name", userName)
    
    return (
        <div className='bg-gray-400 w-80 h-80 sm:w-96 sm:h-96 flex flex-col  justify-center items-center  p-2 italic rounded-full gap-y-5'>  
                <h1 className='text-5xl' >Welcome</h1>
                <input onChange={(e)=>{setUserName(e.target.value)}} className='outline-none bg-slate-100 w-64 p-2 mt-5 rounded-xl' placeholder='Lütfen adınızı giriniz'/>
                <button onClick={()=>{setLoginControll(true)}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tamam</button>       
        </div>
    )
}

export default Login