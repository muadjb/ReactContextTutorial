import React, { useState } from 'react'
import Movie from './Movie'

export interface MovieType {
  name: string
  price: string
  id: number
}
export interface MovieProps {
  movie: MovieType
}

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 23124 },
    { name: 'Game of Thrones', price: '$10', id: 2566124 },
    { name: 'Inception', price: '$12', id: 23524 },
  ])

  return (
    <div>
      {movies.map(m => (
        <Movie key={m.id} movie={m} />
      ))}
    </div>
  )
}

export default MovieList
