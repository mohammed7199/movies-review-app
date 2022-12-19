import React from 'react'

import MoviesContainer from './components/MoviesContainer'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) =>{

    return (
        <div className="App" >

            < MoviesContainer />

        </div>
    )
}

export default App