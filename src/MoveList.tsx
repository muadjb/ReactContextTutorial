import React, { useState } from 'react'

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: 23124 },
    { name: 'Game of Thrones', price: '$10', id: 2566124 },
    { name: 'Inception', price: '$12', id: 23524 },
  ])

  return (
    <div>
      {movies.map(m => (
        <li>{m.name}</li>
      ))}
    </div>
  )
}

export default MovieList
