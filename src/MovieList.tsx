import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieContext } from './MovieContext'

export interface MovieType {
  title: string
  price: string
  id: number
}
const MovieList: React.FC = () => {
  // const [movies, setMovies] = useContext(MovieContext)
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div>
      {movies.map(m => (
        <Movie key={m.id} movie={m} />
      ))}
    </div>
  )
}

export default MovieList
