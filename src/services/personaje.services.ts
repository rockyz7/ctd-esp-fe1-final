import { Personaje } from "../interfaces/interface";

export const buscarPersonaje = async (
  nombre?: string
): Promise<Personaje[]> => {
  let params = "?";
  if (nombre) {
    params += `name=${nombre}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data);
};
