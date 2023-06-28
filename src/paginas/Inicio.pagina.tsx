import Filtros from "../componentes/personajes/filtros.componente";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useEffect } from "react";
import {
  getCharacters,
  nextPage,
  prevPage,
} from "../reducers/personajesReducer";
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

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(getCharacters(data.results));
        dispatch(nextPage(data.info.next));
        dispatch(prevPage(data.info.prev));
      });
  }, []);

  const { personajes } = useAppSelector((state) => state.personajes);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personajes</h3>
        <button className="danger">Limpiar filtros</button>
      </div>
      <Filtros />
      <Paginacion />
      <GrillaPersonajes personajes={personajes} />
      <Paginacion />
    </div>
  );
};

export default PaginaInicio;
