const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return state + action.payLoad;
    }
    else if (action.type === 'DECREMENT') {
        if (state > 0) {
            return state - action.payLoad;
        }
        return state;

    }
    else {
        return state;
    }
}
export default changeTheNumber;