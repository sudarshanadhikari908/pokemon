import { createSlice } from "@reduxjs/toolkit";
import { getPokemonByGeneration } from "@store/actions/pokemon";
import { toast } from "react-toastify";

interface IPokemon {
  name: string;
  url: string;
}

interface State {
  pokemonTeam: any;
  pokemonList:
    | {
        count: number;
        next?: string | null;
        previous?: string | null;
        results: IPokemon[];
      }
    | undefined;
  pokemonListLoading: boolean;
  pokemonDetail: any;
}

const initialState: State = {
  pokemonTeam: [],
  pokemonList: undefined,
  pokemonListLoading: false,
  pokemonDetail: undefined,
};

const pokemonSlice = createSlice({
  name: "pokemon slice",
  initialState,
  reducers: {
    setPokemonDetail: (state, action) => {
      state.pokemonDetail = action.payload;
    },
    resetPokemonDetail: (state) => {
      state.pokemonDetail = undefined;
    },
    setPokemonTeam: (state, action) => {
      const { payload } = action;
      if (state.pokemonTeam.length === 6) {
        toast.info("Maximum number of pokemon reached");
        return;
      }
      const isDuplicate = state?.pokemonTeam?.some(
        (pokemon: any) => pokemon.id === payload.id,
      );
      if (!isDuplicate) {
        state.pokemonTeam.push(payload);
        toast.success("Pokemon added successfully");
      } else {
        toast.info("This pokemon is already added to your team");
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonByGeneration.pending, (state) => {
      state.pokemonListLoading = true;
    });
    builder.addCase(getPokemonByGeneration.fulfilled, (state, action) => {
      state.pokemonListLoading = false;
      state.pokemonList = action.payload;
    });
    builder.addCase(getPokemonByGeneration.rejected, (state) => {
      state.pokemonListLoading = false;
      state.pokemonList = undefined;
    });
  },
});

export const { setPokemonDetail, resetPokemonDetail, setPokemonTeam } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
