import "./boton-favorito.css";
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 *
 *
 * @returns un JSX element
 */

interface Props {
  esFavorito: boolean;
  onClick: () => void;
}

const BotonFavorito = ({ esFavorito, onClick }: Props) => {
  const src: string = esFavorito
    ? "/imagenes/star-filled.png"
    : "/imagenes/star.png";

  return (
    <div className="boton-favorito" onClick={onClick}>
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotonFavorito;
