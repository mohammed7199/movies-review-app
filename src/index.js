import ReactDOM from 'react-dom'
import configureStore from './reduxFiles/store/store'
import { Provider } from 'react-redux'
import App from './App'

const store = configureStore()

store.subscribe( () =>{
    console.log('store updated', store.getState()) 
})

const ele = (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(
    ele,
    document.getElementById('root'))