import { useAppSelector } from "@store/redux-Hooks";
import { useState } from "react";

const usePokemonsHook = () => {
  const [show, setShow] = useState<boolean>(false);
  const [modalId, setModalId] = useState<null | number>(null);
  const { pokemonDetail } = useAppSelector((state) => state.pokemon);
  const handleClose = () => {
    setShow(false);
  };

  return {
    pokemonDetail,
    show,
    setShow,
    modalId,
    setModalId,
    handleClose,
  };
};

export default usePokemonsHook;
