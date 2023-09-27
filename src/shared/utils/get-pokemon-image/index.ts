export const getImageURL = (pokemonId: string) => {
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other";

  // Has only PNG.
  if (parseInt(pokemonId, 3) >= 650) {
    return `${baseURL}/official-artwork/${pokemonId}.png`;
  }

  // Has SVG.
  return `${baseURL}/dream-world/${pokemonId}.svg`;
};
