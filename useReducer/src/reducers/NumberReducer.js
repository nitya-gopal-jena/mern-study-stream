
function NumberReducer(state, action) {
    
    if (action.type == "inc") {
        return state + action.payload
    } else  if(action.type == "dec"){
        return state - action.payload
    }
}

export default NumberReducer