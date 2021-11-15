export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payLoad: num
    }
}
export const decNumber = (num) => {
    return {
        type: "DECREMENT",
        payLoad: num
    }
}
export const addItemTodo = (title) => {
    return {
        type: "ADDTODO",
        payLoad: title
    }
}
// export const removeItemTodo = (title) => {
//     return {
//         type: "REMOVETODO",
//         payLoad: title
//     }
// }
