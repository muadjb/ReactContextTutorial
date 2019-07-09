import React, { useState, ChangeEvent, useContext, FormEvent } from 'react'
import { MovieContext } from './MovieContext'

export default function AddMovie() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [movies, setMovies] = useContext(MovieContext)

  function updateTitle(e: ChangeEvent<HTMLInputElement>) {
    console.log('title: ', e.target.value)
    setTitle(e.target.value)
  }

  function updatePrice(e: ChangeEvent<HTMLInputElement>) {
    console.log('price: ', e.target.value)
    setPrice(e.target.value)
  }

  function addMovie(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    // setMovies(prevMovies => [...prevMovies, { title: 'jb', price: '42', id: 99 }])
  }

  return (
    <form>
      <input type="text" name="title" value={title} onChange={updateTitle} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button onClick={addMovie}>Submit</button>
    </form>
  )
}
