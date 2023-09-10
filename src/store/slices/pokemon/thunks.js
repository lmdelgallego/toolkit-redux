import { starLoadingPokemon, setPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
  return async ( dispatch, getState ) => {

    console.log(page);
    dispatch(starLoadingPokemon());

    // TODO: fetch pokemons

    // dispatch(setPokemons());
  }
}