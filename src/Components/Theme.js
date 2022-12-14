import React from 'react'
import { useState } from 'react'

function Theme(props) {

    const [buttonControll, setButtonControll] = useState("Light")

    const handleTheme =()=>{
        props.setThemeControll(props.themeControll == "bg-slate-900" ? "bg-white" : "bg-slate-900" )
        setButtonControll(buttonControll == "Dark" ? "Light" : "Dark")
    }
  return (
    <div className=' absolute top-5 sm:right-20 sm:top-10 '>
        <button onClick={handleTheme} className='bg-orange-400 py-2 px-5 rounded-xl text-white'>{buttonControll}</button>
    </div>
  )
}

export default Theme