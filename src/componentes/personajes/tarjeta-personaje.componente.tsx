import { log } from "console";
import { Personaje } from "../../interfaces/interface";
import { addFav, removeFav } from "../../reducers/favoritosReducer";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import BotonFavorito from "../botones/boton-favorito.componente";
import "./tarjeta-personaje.css";

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
  const { personajes } = useAppSelector((state) => state.personajes);

  const handleFav = () => {
    if (!favs.find((f) => f.id == character.id)) {
      const favoritos = [...favs, character];
      dispatch(addFav(favoritos));
    } else {
      const favo = favs.filter((fav) => fav.id !== character.id);
      dispatch(removeFav(favo));
    }
  };

  return (
    <div className="tarjeta-personaje">
      <img src={character.image} alt={character.name} />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito
          esFavorito={favs.find((f) => f.id == character.id) ? true : false}
          onClick={handleFav}
        />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
