import { getIndividualPokemonDetail } from "@services/pokemon";
import { getPokemonByGeneration } from "@store/actions/pokemon";
import { setPokemonDetail } from "@store/reducers/pokemon";
import { useAppDispatch, useAppSelector } from "@store/redux-Hooks";
import { useEffect, useState } from "react";

const useLayoutHook = () => {
  const [generationKey, setGenerationKey] = useState<string>("1");
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useAppDispatch();
  const { pokemonList } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    setLoading(true);
    dispatch(
      getPokemonByGeneration(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`,
      ),
    );
  }, [generationKey]);

  const getPokemonDetail = async () => {
    const promises: any = await pokemonList?.results.map((data) =>
      getIndividualPokemonDetail(data?.url),
    );
    const returnValue = await Promise.all(promises);
    dispatch(setPokemonDetail(returnValue));
    setLoading(false);
  };

  useEffect(() => {
    if (pokemonList) {
      getPokemonDetail();
    }
  }, [pokemonList]);

  return {
    generationKey,
    setGenerationKey,
    setOffset,
    loading,
  };
};

export default useLayoutHook;
