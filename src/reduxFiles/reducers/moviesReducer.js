const initialState = []

const moviesReducers = ( state = initialState, action ) =>{
    switch(action.type){
        case 'ADD_MOVIES': 
            return [ { ...action.payload }, ...state]

        case 'REMOVE_ID':
            return state.filter((f) =>{
                return f.id !== action.payload
            })

        default : { return [...state] }
    }
}

export default moviesReducers