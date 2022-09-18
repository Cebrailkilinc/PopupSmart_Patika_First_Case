import {useContext} from 'react'
import Header from './Header'
import Input from './Input'
import TodoList from './TodoList'
import TodoContext from '../Context/TodoContext'
import Login from './Login'
import Theme from './Theme'

function Layout() {
const { loginControll, setLoginControll } = useContext(TodoContext)


  return (
    <>
    { loginControll ?
     <div className='flex flex-col justify-center ml-3' >       
        <Header/>
        <Input />
        <TodoList />
    </div> : <Login/>
    }
    </>
  )
}

export default Layout