import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import  '../Components/disc.css'

const Discription = ({MovieListe}) => {
  const params = useParams()
  console.log(params)
  const movie = MovieListe.find(el=>el.id == params.id)
  return (
    <div>
      <div className ='disc'>
     <Link  to = '/'><button className='btn'>Retourner</button></Link> 
     </div>
     <div className = 'disc2'>
      {movie.Discription} <br></br>
      {movie.URlVideo}
      </div>
    </div>
    
  )
}

export default Discription
