import logo from './logo.svg';
import './App.css'; 
import {useState} from 'react'
import MovieList from './Components/MovieList'
import Header from './Components/header'
import Filter from './Components/Filter'

function App() {
  const [MovieListe, SetMovieListe]= useState ([
    {titre :"titre1", rate:5,Discription: "dispcription1",imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/34/The_SpongeBob_Movie_-_Sponge_on_the_Run.png"},
    {titre :"titre2", rate:3,Discription: "dispcription2",imgUrl:"https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"},
    {titre :"titre3", rate:2,Discription: "dispcription3",imgUrl:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"}
  ])
  const handleAdd = (newMovie) => {
    SetMovieListe([...MovieListe , newMovie ])
  }

  const [searchTitle, setSearchTitle] = useState("");
  const handleInputTitle = (e) => {
    setSearchTitle(e.target.value);
};
const handleSearchTitle = () => {
  SetMovieListe(
    MovieListe.filter(
            (movie) =>
                movie.titre.toLocaleLowerCase() === searchTitle.toLocaleLowerCase()
        )
    );
};
const [newRating, setNewRating] = useState("");
const ratingChanged = (newRating) => {
  setNewRating(newRating);
  SetMovieListe(MovieListe.filter((movie) => movie.rate <= newRating));
};


  return (
    <div className="App">
      <Header handleAdd={handleAdd}></Header>
      <Filter
                handleInputTitle={handleInputTitle}
                handleSearchTitle={handleSearchTitle}
                ratingChanged={ratingChanged}
              
            />
      <MovieList MovieListe={MovieListe}/>
    </div>
  );
}

export default App;
