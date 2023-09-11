import { starLoadingPokemon, setPokemons } from "./pokemonSlice"
import * as pokemonApi from "../../../api/pokemonApi"


export const getPokemons = (page = 0) => {
  return async ( dispatch, getState ) => {
    dispatch(starLoadingPokemon());
    // TODO: fetch pokemons
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`);
    // const data = await response.json();
    const {data} = await pokemonApi.getPokemons(page);
    dispatch(setPokemons({
      pokemons: data.results,
      page: page + 1,
      total: data.count
    }))
      // .then(data => {
      //   const { results } = data;
      //   const pokemons = results.map( pokemon => {
      //     const { name, url } = pokemon;
      //     const urlParts = url.split('/');
      //     const id = urlParts[urlParts.length - 2];
      //     const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      //     return { id, name, image };
      //   });
      //   dispatch(setPokemons(pokemons));
      // })

    // dispatch(setPokemons());
  }
}