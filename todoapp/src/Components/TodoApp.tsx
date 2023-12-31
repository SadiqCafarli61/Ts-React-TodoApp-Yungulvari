import React, { useState } from 'react'


type Todo = {
    id: number,
    text: string,
    completed: false
  
}



const TodoApp:React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([])
    const [newTodo, setNewTodo] = useState<string>('')


    const addMessage = () => {
        if(newTodo.trim() !== ""){
            setTodos(prevTodos => [
                ...prevTodos,
                {id: Date.now(), completed: false, text: newTodo.trim()}
            
            ])
            setNewTodo("")
        }
    }
    const deleteTodo = (id: number) => {
        setTodos(prevTodos =>prevTodos.filter(item => item.id !== id))
       
    }
    
 
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
           <input
             value={newTodo}
             onChange={(e) =>setNewTodo(e.target.value)}
          
           type="text" />
           <button onClick={addMessage}>Add</button>
           <br />

           {
            todos.map((item,index) => (
                <>
                <li key={index}>{item.text}</li>
                <button onClick={() =>deleteTodo(item.id)}>Delete</button>
                </>
            ))
           }
           
    </div>
  )
}

export default TodoApp