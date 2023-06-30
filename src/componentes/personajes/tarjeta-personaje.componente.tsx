import { Personaje } from "../../interfaces/interface";
import {
  agregarFavorito,
  eliminarFavorito,
} from "../../reducers/favoritosReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";
import {
  fetchEpisodiosThunk,
  guardarPersonaje,
} from "../../reducers/detalleReducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */

interface Props {
  character: Personaje;
}

const TarjetaPersonaje = ({ character }: Props) => {
  const dispatch = useAppDispatch();
  const { favs } = useAppSelector((state) => state.favoritos);
  const { personaje, arrayEpisodios } = useAppSelector(
    (state) => state.detalles
  );
  /**
   * Esta función corrobora que el favorito que se intenta guardar no esté ya guardado en el state. En caso de que sí, lo elimina mediante el dispatch
   * correspondiente. De lo contrario lo agrega.
   */

  const manejarFavoritos = () => {
    if (!favs.find((f) => f.id == character.id)) {
      const favoritos: Personaje[] = [...favs, character];
      dispatch(agregarFavorito(favoritos));
    } else {
      const favorito: Personaje[] = favs.filter(
        (fav) => fav.id !== character.id
      );
      dispatch(eliminarFavorito(favorito));
    }
  };

  const verDetalles = () => {
    dispatch(guardarPersonaje(character));
  };

  return (
    <div className="tarjeta-personaje" onClick={verDetalles}>
      <Link to={"/detalle"}>
        <img src={character.image} alt={character.name} />
      </Link>

      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito
          esFavorito={favs.find((f) => f.id == character.id) ? true : false}
          onClick={manejarFavoritos}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
