import React from 'react'
import { useSelector } from 'react-redux'

import { BsFillStarFill } from "react-icons/bs";

const MoviesStat = (props) =>{

    const movies = useSelector((state) =>{
        return state.movies
    })

    const top3 = [ ...movies.sort((a, b) =>{ return b.ranking - a.ranking }).slice(0, 3) ] // show only recent 3 id's 

    return (
        <div className="border shadow p-3 mb-5 bg-body rounded" style={{ position: "absolute", width: "300px", right: "190px", top: "400px"}} >

            { movies.length === 0 ? 
                (<h3 style={{fontFamily: "monospace", color: "#37475A" }} > No data found, add movies to show top movies. </h3>
                ) : (
                <div>
                    <h5> Top 3 Ranked Movies </h5>

                    <table className='table rounded'>
                        <thead>
                            <tr>
                                <td> # </td>
                                <td> Name </td>
                                <td> IMDb Rating </td>
                            </tr>
                        </thead>
                        <tbody>
                            { top3.map( (ele, i) => { 
                                return <tr key={ele.id} > 
                                    <td> { i + 1 }. </td> 
                                    <td> <small> {ele.movie} </small> </td>
                                    <td> <BsFillStarFill color="orange" > </BsFillStarFill> {ele.ranking} </td>
                                </tr> }) 
                            }
                        </tbody>
                    </table>
                </div>)
            }
  
        </div>
    )
}

export default MoviesStat