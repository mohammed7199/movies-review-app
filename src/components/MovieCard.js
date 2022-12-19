import { useDispatch } from 'react-redux'
import { removeMovie } from '../reduxFiles/actions/moviesAction'

import swal from 'sweetalert';
import { MdDelete } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";

//Posters
import defaultImage from '../Assets/defaultImage.jpg'
import Inception from './../Assets/Inception.jpg'
import Interstellar from '../Assets/Interstellar.jpg'
import DoctorStrange from '../Assets/DoctorStrange.jpg'
import SpiderMan from '../Assets/Spider-man.jpg'
import Matrix from '../Assets/Matrix.png'

const MovieCard = (props) => {
    const posters = [Inception, Interstellar, DoctorStrange, SpiderMan, Matrix]

    const dispatch = useDispatch()
    
    const { id, movie, ranking } = props

    const handleRemove= (id) =>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this movie!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your movie has been deleted!", {
                icon: "success",
              });
              dispatch(removeMovie(id))
            } else {
              swal("Your movie is safe!");
            }
          });
    }

    const findPoster = () => {
      // Finding right poster to display or display defaultImage
      return posters.find(ele => ele.toLowerCase().slice(14, 20) === movie.toLowerCase().slice(0, 6)) || defaultImage
    }

    return (
        <div className="card-group g-4 bg-body rounded" style={{width: "14rem" }}>
            <div className='card'>
            <img src={ findPoster() } className="card-img-top" alt="Movies poster" />
            <div className="card-body" style={{ backgroundColor: "#232F3E" }} >
                <h6 className="card-title" style={{color: "#f2f2f4"}} > Name: { movie } </h6>
                <div className="card-text" style={{color: "#f2f2f4"}} > <h6> IMDb: <BsFillStarFill color="orange" > </BsFillStarFill> { ranking } </h6> </div>
                <button onClick={()=>{handleRemove(id)}}
                    style={{border:'none',background:'none', display:'inline-block', float: 'right'}}> <MdDelete size="1.3em" color="#f2f2f4" /> </button>
            </div>
            </div>
        </div>
    )
}

export default MovieCard