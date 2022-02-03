
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    inputValue: []
}

const todoSlice = createSlice({
    name: 'Todo',//action
    initialState,//initial state
    reducers: {
        addTodo: (state, action) => {
            state.inputValue = [...state.inputValue, action.payload]
            state.inputvalue = ['']
        }
    }

})

export default todoSlice.reducer

export const { addTodo } = todoSlice.actions



// const addTodo = (state = initialState, action) => {
//     if (action.type === 'ADDTODO') {
//         return [...state, action.payLoad]
//     }
//     // if(action.type==='REMOVETODO'){

//     // }
//     else {
//         return state
//     }
// }
// export default addTodo