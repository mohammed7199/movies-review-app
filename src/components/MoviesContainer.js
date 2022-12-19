import React from 'react'
import MoviesForm from './MoviesForm'
import MoviesStat from './MoviesStat'
import MovieList from './MoviesList'

const MoviesContainer = (props) =>{
    
    
    
    return (
        
        <div style={{ position: 'relative', left: "30px", top: "20px" }}>

            <h2 style={{position: 'relative', left: "30px", fontFamily:"monospace", color: "#37475A" }} > Movies Rating list </h2> <br />
            
            <MovieList />
                
            <MoviesForm />

            <MoviesStat />       
        </div>
    )
}

export default MoviesContainer