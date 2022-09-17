import { useState } from "react";
import Input from "./Components/Input";
import Layout from "./Components/Layout";
import Spinner from "./Components/Spinner";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./Context/TodoContext";
import Theme from "./Components/Theme";


function App() {

  const [themeControll, setThemeControll] = useState("")

  return (
    <div className={`flex flex-col items-center justify-center  ${themeControll} h-screen`}>
      <TodoProvider>
        <Theme themeControll={themeControll} setThemeControll={setThemeControll} />
        <Layout />
      </TodoProvider>
    </div>
  );
}

export default App;
