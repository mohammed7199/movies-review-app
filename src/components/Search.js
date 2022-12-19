import React, {useState} from 'react'

const Search = (props) =>{
    const [ search, setSearch ] = useState('')
    const [ orderBy, setOrderBy ] = useState('')

    const { setCloneData, originalData }= props

    // creating options for sorting
    const sortData = [ 'A to Z', 'Z to A', '1-100', '100-1' ]

    const handleChange = (e) =>{
        const readName = e.target.name
        const read = e.target.value

            if( readName === 'search' ){
                setSearch(read)
            } else if ( readName === 'orderBy') {
                setOrderBy(read)
            }

        //filtering search
        if(readName === 'search'){
            const filteredMovies = originalData.filter((f) =>{
                return f.movie.toLowerCase().includes(read.toLowerCase()) || f.ranking.toString().includes(read)
            })
            setCloneData(filteredMovies) 
        }
        
        //orderBy sorting
        if(readName === 'orderBy'){
            switch(read){
                case 'A to Z': 
                    return setCloneData([ ...originalData.sort((a, b) =>{
                        if( a.movie < b.movie ) { return -1 }
                        if( a.movie > b.movie ) { return 1 }
                        return 0
                    }) ])
                case 'Z to A': 
                    return setCloneData([ ...originalData.sort((a, b) =>{
                        if( b.movie < a.movie ) { return -1 }
                        if( b.movie > a.movie ) { return 1 }
                        return 0
                    }) ])
                case '1-100':
                    return setCloneData([ ...originalData.sort((a, b) => {
                        return a.ranking - b.ranking
                    }) ])
                case '100-1': 
                    return setCloneData([ ...originalData.sort((a, b) =>{
                        return b.ranking - a.ranking
                    }) ])
                default: return [...originalData]
            }
        }
    }

    return (
        <div className=" row col-12" style={{ position: 'relative', width: "900px", top: '0px' }} >
            <form className="input-group input-group-sm mb-3" aria-label="Text input with dropdown button" > 

                <input type='text' 
                    placeholder='Search by Movie/Ranking' 
                    value={ search } 
                    onChange={ handleChange } 
                    name='search'
                    className='form-control'
                    style={{backgroundColor: "#f2f2f4" }}
                />
                
                <div className="row col-3">
                    <select value={orderBy} 
                            onChange={ handleChange }
                            name='orderBy'
                            className="btn btn-secondary dropdown-toggle form-select" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false"
                            >

                            <option value='' > order by </option>
                                            
                            { sortData.map((ele, i) =>{
                                return <option key={i} value={ele} > {ele} </option>
                            })}
                    </select>
                </div>
                
            </form> <br />
        </div>
    )
}

export default Search