import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { Personaje } from "../interfaces/interface";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect } from "react";
import {
  fetchEpisodiosThunk,
  guardarEpisodio,
  guardarIDEpisodio,
} from "../reducers/detalleReducer";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 *
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalle /> ```
 *
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
  const { personaje, arrayEpisodios, episodio } = useAppSelector(
    (state) => state.detalles
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (arrayEpisodios.length > 0) {
      dispatch(fetchEpisodiosThunk(arrayEpisodios));
    }
  }, []);

  return (
    <div className="container">
      <h3>{}</h3>
      <div className={"detalle"}>
        <div className={"detalle-header"}>
          <img src={personaje.image} alt={personaje.name} />
          <div className={"detalle-header-texto"}>
            <p>{personaje.name}</p>
            <p>{personaje.origin.name}</p>
            <p>Genero: {personaje.gender}</p>
          </div>
          {/* <BotonFavorito esFavorito={false} /> */}
        </div>
      </div>
      <h4>Lista de episodios donde apareció el personaje</h4>
      <div className={"episodios-grilla"}>
        {episodio && episodio.length > 0
          ? episodio.map((ep) => <TarjetaEpisodio key={ep.id} episodio={ep} />)
          : " "}
      </div>
    </div>
  );
};

export default PaginaDetalle;
