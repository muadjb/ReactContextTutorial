import React, { ChangeEvent, FormEvent, useState } from 'react'
import { MovieType } from './MovieList2'

export default function AddMovie2(props: { onJB: Function }) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

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
    const newMovie: MovieType = { title: title, price: price, id: 22 }
    props.onJB(newMovie)
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
