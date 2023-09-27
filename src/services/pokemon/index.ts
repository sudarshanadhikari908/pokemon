import axios from "axios";

export const getIndividualPokemonDetail = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res?.data;
  } catch (e) {
    return e;
  }
};
