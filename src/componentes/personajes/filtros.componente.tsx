import { ChangeEvent } from "react";
import "./filtros.css";
import {
  fetchPersonajeThunk,
  getCharacters,
  nextPage,
  prevPage,
} from "../../reducers/personajesReducer";
import { useAppDispatch } from "../../store/hooks";

const Filtros = () => {
  const dispatch = useAppDispatch();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    dispatch(fetchPersonajeThunk(name));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={onChange}
      />
    </div>
  );
};

export default Filtros;
