import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Personaje } from "../interfaces/interface";
import { buscarPersonaje } from "../services/personaje.services";

interface InitialState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  personajes: Personaje[];
  prev: string | null;
  next: string | null;
}

const initialState: InitialState = {
  status: "IDLE",
  personajes: [],
  prev: "",
  next: "",
};

export const fetchPersonajeThunk = createAsyncThunk(
  "personaje/fetchThunk",
  async (name: string) => {
    try {
      const personajes: Personaje[] = await buscarPersonaje(name);
      return personajes;
    } catch (e) {
      return e;
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonajeThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(
        fetchPersonajeThunk.fulfilled,
        (state, action: PayloadAction<Personaje[] | any>) => {
          state.status = "COMPLETED";
          if (action.payload.results) {
            state.personajes = action.payload.results;
            state.prev = action.payload.info.prev;
            state.next = action.payload.info.next;
          } else {
            state.personajes = [];
            state.prev = null;
            state.next = null;
          }
        }
      )
      .addCase(
        fetchPersonajeThunk.rejected,
        (state, action: PayloadAction<Personaje[] | any>) => {
          state.status = "FAILED";
        }
      );
  },
});

export const { nextPage, prevPage, getCharacters } = personajesReducer.actions;
