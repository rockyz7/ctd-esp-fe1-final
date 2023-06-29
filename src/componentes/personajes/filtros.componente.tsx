import { ChangeEvent } from "react";
import "./filtros.css";
import {
  fetchPersonajeThunk,
  manejarFiltro,
} from "../../reducers/personajesReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Filtros = () => {
  const dispatch = useAppDispatch();
  const { nombre } = useAppSelector((state) => state.personajes);

  /**
   * Esta función guarda el valor del input en una variable que luego se usa como parámetro para hacer el llamado a la API con el filtro
   * necesario por medio de Thunk. También guarda el valor del input en el estado del slice de Personajes.
   */

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const name: string = e.target.value;
    dispatch(fetchPersonajeThunk(name));
    dispatch(manejarFiltro(e.target.value));
  };

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={onChange}
        value={nombre}
      />
    </div>
  );
};

export default Filtros;
