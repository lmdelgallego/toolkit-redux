import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
  total: 0,
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
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
      state.total = action.payload.total;
      state.loading = false;
    }
  }
});

export const { starLoadingPokemon, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;