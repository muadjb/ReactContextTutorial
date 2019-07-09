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
    <div className="App">
      <MovieList2 />

      {/* <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider> */}
    </div>
  )
}

export default App
