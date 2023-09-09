import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  pokemons: [],
  loading: false,
  error: null
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    starLoadingPokemon: (state) => {
      state.loading = true;
    },
    setPokemons: (state, action) => {
      console.log({action});
    }
  }
});

export const { starLoadingPokemon, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;