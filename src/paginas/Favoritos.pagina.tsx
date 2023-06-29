import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { eliminarTodos } from "../reducers/favoritosReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
  const dispatch = useAppDispatch();
  const { favs } = useAppSelector((state) => state.favoritos);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={() => dispatch(eliminarTodos([]))}>
          Eliminar favoritos
        </button>
      </div>
      {favs.length > 0 ? (
        <GrillaPersonajes personajes={favs} />
      ) : (
        "No seleccionaste ningún personaje como favorito"
      )}
    </div>
  );
};

export default PaginaFavoritos;
