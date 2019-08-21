import React from 'react'
import { MovieType } from './MovieList'

export interface MovieProps {
  movie: MovieType
}

// const Movie: React.FC<MovieProps> = ({ movie }) => {
function Movie({ movie }: MovieProps) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <h6>{movie.price}</h6>
    </div>
  )
}

export default Movie
