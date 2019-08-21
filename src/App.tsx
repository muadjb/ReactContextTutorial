import React from 'react'
import './App.css'
import MovieList from './MovieList'
import MovieList2 from './MovieList2'
import Nav from './Nav'
import { MovieProvider } from './MovieContext'
import AddMovie from './AddMovie'
import AddMovie2 from './AddMovie2'

const App: React.FC = () => {
  return (
    //   <MovieList2 />

    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  )
}

export default App
