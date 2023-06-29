import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../interfaces/interface";

interface InitialState {
  favs: Personaje[];
}

const initialState: InitialState = {
  favs: [],
};

export const favoritosReducer = createSlice({
  name: "favoritos",
  initialState,
  reducers: {
    agregarFavorito: (state, action) => {
      state.favs = action.payload;
    },
    eliminarFavorito: (state, action) => {
      state.favs = action.payload;
    },
    eliminarTodos: (state, action) => {
      state.favs = action.payload;
    },
  },
});

export const { agregarFavorito, eliminarFavorito, eliminarTodos } =
  favoritosReducer.actions;
