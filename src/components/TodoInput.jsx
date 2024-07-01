import { useState } from "react"

export default function TodoInput(props){
    const { handleAddTodos, todoValue, setTodoValue } = props

    const onEnter = (event, callback) => event.key === 'Enter' && callback();

    return(
        <header>
            
            <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} placeholder="Enter todo..."  onKeyDown={(e) => {
                if (e.key === "Enter") handleAddTodos(todoValue), setTodoValue(''); 
                                }}/>
            <button onClick={() => {handleAddTodos(todoValue); setTodoValue('')}}>Add</button>
        </header>
    )
}