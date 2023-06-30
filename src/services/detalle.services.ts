import { Episodio } from "../interfaces/interface";

export const traerEpisodios = async (
  episodios?: string[]
): Promise<Episodio[]> => {
  if (episodios) {
    const listaIDs = episodios.map((ep) => Number(ep.split("/")[5]));
    return fetch(`https://rickandmortyapi.com/api/episode/[${listaIDs}]`)
      .then((data) => data.json())
      .then((data) => data);
  }

  return [];
};
