import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect } from "react";
import { getCharacters, manejarFiltro } from "../reducers/personajesReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
  const dispatch = useAppDispatch();

  /**
   * Esta función realiza un pedido a la API rick and morty para obtener los personajes
   */

  const llamadaInicialAPI = () => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(getCharacters(data));
      });
  };

  useEffect(() => {
    llamadaInicialAPI();
  }, []);

  const { personajes } = useAppSelector((state) => state.personajes);

  /**
   * Esta función resetea el valor que tiene "nombre" (donde se guarda el input del usuario al filtrar) en el state.
   * Vuelve a hacer un llamado a la API para que se rendericen nuevamente los primeros 20 personajes.
   */

  const eliminarFiltros = () => {
    dispatch(manejarFiltro(""));
    llamadaInicialAPI();
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger" onClick={eliminarFiltros}>
          Limpiar filtros
        </button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes personajes={personajes} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
