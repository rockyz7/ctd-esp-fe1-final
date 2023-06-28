import { ChangeEvent } from "react";
import "./filtros.css";
import {
  getCharacters,
  nextPage,
  prevPage,
} from "../../reducers/personajesReducer";
import { useAppDispatch } from "../../store/hooks";

const Filtros = () => {
  const dispatch = useAppDispatch();
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`)
      .then((data) => data.json())
      .then((data) => {
        dispatch(getCharacters(data.results));
        dispatch(nextPage(data.info.next));
        dispatch(prevPage(data.info.prev));
      });
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
