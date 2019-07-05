import React from 'react'
import { MovieProps } from './MovieList'

const Movie: React.FC<MovieProps> = ({ movie }) => {
  // function Movie<MovieProps>(props): React.FC {
  return (
    <div>
      <h3>{movie.name}</h3>
      <h6>{movie.price}</h6>
    </div>
  )
}

export default Movie
