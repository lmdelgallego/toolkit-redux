import axios from 'axios';

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export const getPokemons = (page = 0) => {
  return pokemonApi.get(`pokemon?offset=${page * 20}&limit=20`);
}

export const getPokemon = (id) => {
  return pokemonApi.get(`pokemon/${id}`);
}