'use client'

import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { addTodo } from "@/lib/slices/todoSlice"
import { useState } from "react"


export default function Todos(){
const [inp,setInp] = useState('') 
    const todo = useAppSelector((state)=>state.todos.todos)

    const dispatch = useAppDispatch()

    const adds = ()=>{
    dispatch(addTodo(inp))
    setInp('')
    }
    return(
        <>
        <input type="text"  value={inp}  onChange={(e)=>{setInp(e.target.value)}}/>
        <button onClick={adds}>AddTodo</button>
        
        <ul>
            {
                todo.map((item,index)=>(
                   
                    <li key={index}>{item}</li>
                  
                    
                ))
            }
             </ul>
        </>
    )
}