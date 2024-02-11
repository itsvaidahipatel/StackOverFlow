const usersReducer = (states = [],action ) =>{
    switch (action.type) {
        case 'FETCH_USERS':
            return action.payload
        case 'UPDATE_CURRENT_USER':
            const newstates = states.map((state)=>{
                if(state._id === action.payload._id){
                    return action.payload
                }else{
                    return state
                }
            });
            return newstates
        default:
            return states
    }
}
export default usersReducer