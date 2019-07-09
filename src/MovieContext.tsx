import React, { createContext, useState } from 'react'
import { MovieType } from './MovieList'

export const MovieContext = createContext<MovieType[]>([])
// export const MovieContext = createContext<jj>([])

export function MovieProvider(props: any) {
  const [movies, setMovies] = useState<MovieType[]>([
    { title: 'Harry Potter', price: '$10', id: 23124 },
    { title: 'Game of Thrones', price: '$10', id: 2566124 },
    { title: 'Inception', price: '$12', id: 23524 },
  ])

  return <MovieContext.Provider value={movies}>{props.children}</MovieContext.Provider>
  // return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
}
