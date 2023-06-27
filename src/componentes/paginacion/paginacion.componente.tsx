import {
  getCharacters,
  nextPage,
  prevPage,
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

  const handleNext = () => {
    if (next !== null) {
      fetch(next)
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(getCharacters(data.results));
          dispatch(nextPage(data.info.next));
          dispatch(prevPage(data.info.prev));
        });
    }
  };

  const handlePrev = () => {
    if (prev !== null) {
      fetch(prev)
        .then((resp) => resp.json())
        .then((data) => {
          dispatch(getCharacters(data.results));
          dispatch(nextPage(data.info.next));
          dispatch(prevPage(data.info.prev));
        });
    }
  };

  return (
    <div className="paginacion">
      <button
        disabled={prev !== null ? false : true}
        className={"primary"}
        onClick={handlePrev}
      >
        Anterior
      </button>
      <button
        disabled={next !== null ? false : true}
        className={"primary"}
        onClick={handleNext}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
