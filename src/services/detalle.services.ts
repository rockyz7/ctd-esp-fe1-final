import { Episodio } from "../interfaces/interface";

export const traerEpisodios = async (
  episodios?: number[]
): Promise<Episodio[]> => {
  if (episodios) {
    return fetch(`https://rickandmortyapi.com/api/episode/[${episodios}]`)
      .then((data) => data.json())
      .then((data) => data);
  }

  return [];
};
