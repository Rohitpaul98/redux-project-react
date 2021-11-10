const initialState = []

const addTodo = (state = initialState, action) => {
    if (action.type === 'ADDTODO') {
        return [...state, action.payLoad]
    }
    else {
        return state
    }
}
export default addTodo