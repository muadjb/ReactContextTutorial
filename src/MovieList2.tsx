import React, { useState } from 'react'
import Movie from './Movie'
import AddMovie2 from './AddMovie2'

export interface MovieType {
  title: string
  price: string
  id: number
}
export interface MovieProps {
  movie: MovieType
}

export default function MovieList2(): JSX.Element {
  const [movies2, setMovies2] = useState<MovieType[]>([
    { title: 'Pulp Fiction', price: '$100', id: 224 },
    { title: 'Dogs', price: '$1', id: 254 },
    { title: 'Spies', price: '$2', id: 234 },
  ])

  function handleJB(newMovie: MovieType) {
    console.log(newMovie)
    // setMovies2({...movies2, newMovie})
    setMovies2([...movies2, newMovie])
  }

  return (
    <div>
      {movies2.map(m => (
        <Movie key={m.id} movie={m} />
      ))}
      <AddMovie2 onJB={handleJB} />
    </div>
  )
}
