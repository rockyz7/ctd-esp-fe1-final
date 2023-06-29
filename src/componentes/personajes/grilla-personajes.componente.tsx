import { useEffect, useState } from "react";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { Personaje } from "../../interfaces/interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getCharacters } from "../../reducers/personajesReducer";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 *
 *
 * @returns un JSX element
 */

interface Props {
  personajes: Personaje[];
}

const GrillaPersonajes = ({ personajes }: Props) => {
  const { status } = useAppSelector((state) => state.personajes);
  const characters: Personaje[] = personajes ?? [];

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!personajes || personajes.length === 0)
    return <>No se encontraron resultados.</>;

  return (
    <div className="grilla-personajes">
      {characters.map((ch) => {
        return <TarjetaPersonaje key={ch.id} character={ch} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
