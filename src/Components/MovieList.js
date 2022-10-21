import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MoviesCard";
import './MovieCard.css'
import {Link} from 'react-router-dom'




const MovieList = ({MovieListe}) => {

    return (
        <div className="movie-grid">
           {
           MovieListe.map ( (el , i) => <MovieCard el = {el} key={i} />)
           }
                 {/* <Link to ={'/description/${el.id}'}><button>see more</button></Link> */}
           </div>
           
    )
}



export default MovieList;
