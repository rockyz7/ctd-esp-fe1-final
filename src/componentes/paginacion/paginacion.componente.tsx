import {
  fetchCambiarPersonajesThunkNext,
  fetchCambiarPersonajesThunkPrev,
} from "../../reducers/personajesReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 *
 * @returns un JSX element
 */
const Paginacion = () => {
  const dispatch = useAppDispatch();
  const { next, prev } = useAppSelector((state) => state.personajes);

  /**
   * Esta función usa el dispatch del reducer para ejecutar el Thunk que sirve de intermediario al llamado de la api
   * que trae los 20 personajes siguientes de la páginación
   */

  const cambiarPersonajesNext = async () => {
    dispatch(fetchCambiarPersonajesThunkNext(next));
  };

  /**
   * Esta función usa el dispatch del reducer para ejecutar el Thunk que sirve de intermediario al llamado de la api
   * que trae los 20 personajes previos de la páginación
   */

  const cambiarPersonajesPrev = async () => {
    dispatch(fetchCambiarPersonajesThunkPrev(prev));
  };

  return (
    <div className="paginacion">
      <button
        disabled={prev !== null ? false : true}
        className={"primary"}
        onClick={() => cambiarPersonajesPrev()}
      >
        Anterior
      </button>
      <button
        disabled={next !== null ? false : true}
        className={"primary"}
        onClick={() => cambiarPersonajesNext()}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
