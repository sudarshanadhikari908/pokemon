import PokemonCard from "@features/pokemon-card";
import useLayoutHook from "@hooks/layouts";
import usePokemonsHook from "@hooks/pokemons";
import Loader from "@shared/components/loader";
import Layout from "@shared/layout";

function Pokemons() {
  const { pokemonDetail, show, setShow, modalId, setModalId, handleClose } =
    usePokemonsHook();

  const { loading } = useLayoutHook();
  return (
    <>
      <div className="d-flex items-center flex-column  gap-1 justify-center">
        <Layout />
        {loading ? (
          <Loader />
        ) : (
          <>
            <PokemonCard
              pokemonDetail={pokemonDetail}
              show={show}
              setShow={setShow}
              modalId={modalId}
              setModalId={setModalId}
              handleClose={handleClose}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Pokemons;
