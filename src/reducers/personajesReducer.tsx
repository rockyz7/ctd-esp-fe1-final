import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../interfaces/interface";

interface InitialState {
  personajes: Personaje[];
  prev: string;
  next: string;
}

const initialState: InitialState = {
  personajes: [],
  prev: "",
  next: "",
};

export const personajesReducer = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.next = action.payload;
    },
    prevPage: (state, action) => {
      state.prev = action.payload;
    },
    getCharacters: (state, action) => {
      state.personajes = action.payload;
    },
  },
});

export const { nextPage, prevPage, getCharacters } = personajesReducer.actions;
