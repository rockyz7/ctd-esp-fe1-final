import { log } from "console";
import { Personaje } from "../../interfaces/interface";
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
  return (
    <div className="tarjeta-personaje">
      <img src={character.image} alt={character.name} />
      <div className="tarjeta-personaje-body">
        <span>{character.name}</span>
        <BotonFavorito esFavorito={false} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
