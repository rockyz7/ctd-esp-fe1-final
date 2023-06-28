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
    addFav: (state, action) => {
      state.favs = action.payload;
    },
    removeFav: (state, action) => {
      state.favs = action.payload;
    },
  },
});

export const { addFav, removeFav } = favoritosReducer.actions;
