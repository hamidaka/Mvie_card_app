import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MoviesCard";
import './MovieCard.css'




const MovieList = ({MovieListe}) => {

    return (
        <div className="movie-grid">
           {
           MovieListe.map ( (el , i) => <MovieCard el = {el} key={i} />)
           }
           </div>
    )
}



export default MovieList;
