import { useEffect, useState } from 'react'
import api from '../../services/api'
import {Link} from "react-router-dom"
import './home.css'

// URL da API: /movie/550?api_key=c3a516fbbcc1c0fadad29168039b0c79

const Home = () => {
  const [moves, setMoves] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadMovies(){
      const response = await api.get("movie/now_playing",{
        params:{
          api_key:"c3a516fbbcc1c0fadad29168039b0c79",
          language: "pt-br",
          page:1,
        }
      })

      //console.log(response.data.results.slice(0,10))
      setMoves(response.data.results.slice(0,10))
      setLoading(false)


    }


    loadMovies()
  },[])

  if(loading){
    return(
      <div className='loading'>
        <h2>Carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div className='container'>
      <div className='lista-filmes'>
        {moves.map((move)=>{
          return(
            <article key={move.id}>
              <strong>{move.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${move.poster_path}`} alt="poster" />
              <Link to={`/filme/${move.id}`}>Acessar</Link>
            </article>
          )

        })}
      </div>
    </div>
  )
}

export default Home