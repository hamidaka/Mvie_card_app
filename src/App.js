import logo from './logo.svg';
import './App.css'; 
import {useState} from 'react'
import MovieList from './Components/MovieList'
import Header from './Components/header'
import Filter from './Components/Filter'

function App() {
  const [searchTitle, setSearchTitle] = useState("");
  const [newRating, setNewRating] = useState(1);
  const [MovieListe, SetMovieListe]= useState ([
    {titre :"spngbob", rate:5,Discription: "dispcription1",imgUrl:"https://upload.wikimedia.org/wikipedia/en/3/34/The_SpongeBob_Movie_-_Sponge_on_the_Run.png"},
    {titre :"black widow", rate:3,Discription: "dispcription2",imgUrl:"https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg"},
    {titre :"thor", rate:2,Discription: "dispcription3",imgUrl:"https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"}
  ])
  
  
  
  const handleAdd = (newMovie) => {
    SetMovieListe([...MovieListe , newMovie ])
  }

  
  
  const handleInputTitle = (text) => {
    setSearchTitle (text) ;
};





const ratingChanged = (number) => {
  setNewRating(number);
};


  return (
    <div className="App">
      <Header handleAdd={handleAdd}></Header>
      <Filter handleInputTitle={handleInputTitle}
       ratingChanged ={ratingChanged} />
      <MovieList MovieListe={ MovieListe.filter(el => el.titre.toLowerCase().includes(searchTitle.toLowerCase().trim())&& el.rate >= newRating )}/>
    </div>
  );
}

export default App;
