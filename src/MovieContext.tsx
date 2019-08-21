import React, { createContext, useState, Dispatch, SetStateAction } from 'react'
import { MovieType } from './MovieList'

type Context = [MovieType[], Dispatch<SetStateAction<MovieType[]>>]

// export const MovieContext = createContext<MovieType[]>([])
export const MovieContext = createContext<Context>([[], () => {}])

interface MovieProviderProps {
  children: any
}

export function MovieProvider({ children }: MovieProviderProps) {
  // const [movies, setMovies] = useState<MovieType[]>([
  const [movies, setMovies] = useState([
    { title: 'Harry Potter', price: '$10', id: 23124 },
    { title: 'Game of Thrones', price: '$10', id: 2566124 },
    { title: 'Inception', price: '$12', id: 23524 },
    { title: 'Shaw', price: '$2', id: 5 },
  ])

  return <MovieContext.Provider value={[movies, setMovies]}>{children}</MovieContext.Provider>
  // return <MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
}
