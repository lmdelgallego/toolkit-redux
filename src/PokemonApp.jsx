import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

import './App.css'

export const PokemonApp = () => {

  const { loading, page, pokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('PokemonApp');
    dispatch(getPokemons())
  },[])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: { loading ? 'True': 'False' }</span>
      <ul>
        {
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
      <button
        disabled={ loading }
        onClick={ () => dispatch(getPokemons(page))}
      >
        Load More
      </button>

    </>
  )
}
