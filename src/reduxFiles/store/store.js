import { createStore, combineReducers } from 'redux'
import moviesReducers from './../reducers/moviesReducer'

const configureStore = () => {
    
    const store = createStore(combineReducers( {
        movies: moviesReducers
    }))
    return store
}

export default configureStore