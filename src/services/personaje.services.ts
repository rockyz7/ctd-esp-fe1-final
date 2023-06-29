import { APIResponse, Personaje, errorLlamada } from "../interfaces/interface";

/**
   * Esta función realiza un pedido a la API rick and morty para obtener el personaje filtrado por nombre
   * @param {string} nombre del personaje que se quiere buscar

   * @returns {Promise<Personaje[]>} 
   */

export const buscarPersonaje = async (
  nombre?: string
): Promise<APIResponse> => {
  let params = "?";
  if (nombre) {
    params += `name=${nombre}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character/${params}`)
    .then((data) => data.json())
    .then((data) => data);
};

/**
   * Esta función realiza un pedido a la API rick and morty para obtener una lista de 20 personajes anteriores a la que se 
   * muestra en la página de inicio (si el valor no es null)
   * @param {string} string contiene la url que se necesita para hacer el fetch 

   * @returns {Promise<APIResponse>} 
   */

export const cambiarDePersonajePrev = async (
  string?: string | null
): Promise<APIResponse> => {
  if (string) {
    return fetch(string)
      .then((resp) => resp.json())
      .then((data) => data);
  }
  return errorLlamada;
};

/**
   * Esta función realiza un pedido a la API rick and morty para obtener una lista de 20 personajes posteriores a la que se 
   * muestra en la página de inicio (si el valor no es null)
   * @param {string} string contiene la url que se necesita para hacer el fetch 

   * @returns {Promise<APIResponse>} 
   */

export const cambiarDePersonajeNext = async (
  string?: string | null
): Promise<APIResponse> => {
  if (string) {
    return fetch(string)
      .then((resp) => resp.json())
      .then((data) => data);
  }
  return errorLlamada;
};
