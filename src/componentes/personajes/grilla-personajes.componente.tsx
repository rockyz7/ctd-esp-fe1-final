import { useEffect, useState } from "react";
import "./grilla-personajes.css";
import TarjetaPersonaje from "./tarjeta-personaje.componente";
import { Personaje } from "../../interfaces/interface";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  getCharacters,
  nextPage,
  prevPage,
} from "../../reducers/personajesReducer";

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
  const dispatch = useAppDispatch();

  //   const { personajes } = useAppSelector((state) => state.personajes);
  //   const { page } = useAppSelector((state) => state.personajes);

  const characters: Personaje[] = personajes ?? [];

  return (
    <div className="grilla-personajes">
      {characters.map((ch) => {
        return <TarjetaPersonaje key={ch.id} character={ch} />;
      })}
    </div>
  );
};

export default GrillaPersonajes;
