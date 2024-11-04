import { createSlice } from "@reduxjs/toolkit";


type todoState = {
    todos: string[]
}

const initialState: todoState ={
    todos: []
}
const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo: (state,{payload}:{payload:string})=>{
            state.todos.push(payload)
        }
    }

})


export default todoSlice
export const {addTodo} = todoSlice.actions