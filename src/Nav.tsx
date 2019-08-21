import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'

export default function Nav() {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <nav>
      <h2>JB</h2>
      <p>List of Movies: ({movies.length}) </p>
    </nav>
  )
}
