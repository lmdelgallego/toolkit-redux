import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

import './App.css'

export const PokemonApp = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('PokemonApp');
    dispatch(getPokemons())
  },[])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
        <li>Pokemon 5</li>
      </ul>

    </>
  )
}
