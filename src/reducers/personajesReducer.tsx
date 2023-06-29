import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIResponse, Personaje, errorLlamada } from "../interfaces/interface";
import {
  buscarPersonaje,
  cambiarDePersonajeNext,
  cambiarDePersonajePrev,
} from "../services/personaje.services";

interface InitialState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  personajes: Personaje[];
  prev: string | null;
  next: string | null;
  nombre: string;
}

const initialState: InitialState = {
  status: "IDLE",
  personajes: [],
  prev: "",
  next: "",
  nombre: "",
};

export const fetchPersonajeThunk = createAsyncThunk(
  "personaje/fetchThunk",
  async (name: string) => {
    try {
      const personajes: APIResponse = await buscarPersonaje(name);
      return personajes;
    } catch (e) {
      return errorLlamada;
    }
  }
);

export const fetchCambiarPersonajesThunkNext = createAsyncThunk(
  "personajesSiguiente/fetchThunk",
  async (string: string | null) => {
    try {
      const personajes: APIResponse = await cambiarDePersonajeNext(string);
      return personajes;
    } catch (e) {
      return errorLlamada;
    }
  }
);

export const fetchCambiarPersonajesThunkPrev = createAsyncThunk(
  "personajesAnterior/fetchThunk",
  async (string: string | null) => {
    try {
      const personajes: APIResponse = await cambiarDePersonajePrev(string);
      return personajes;
    } catch (e) {
      return errorLlamada;
    }
  }
);

export const personajesReducer = createSlice({
  name: "personajes",
  initialState,
  reducers: {
    getCharacters: (state, action: PayloadAction<APIResponse>) => {
      state.personajes = action.payload.results;
      state.prev = action.payload.info.prev;
      state.next = action.payload.info.next;
    },
    manejarFiltro: (state, action: PayloadAction<string>) => {
      state.nombre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonajeThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(
        fetchPersonajeThunk.fulfilled,
        (state, action: PayloadAction<APIResponse>) => {
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
      .addCase(fetchPersonajeThunk.rejected, (state) => {
        state.status = "FAILED";
      })
      .addCase(fetchCambiarPersonajesThunkNext.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(
        fetchCambiarPersonajesThunkNext.fulfilled,
        (state, action: PayloadAction<APIResponse>) => {
          state.status = "COMPLETED";

          state.personajes = action.payload.results;
          state.prev = action.payload.info.prev;
          state.next = action.payload.info.next;
        }
      )
      .addCase(fetchCambiarPersonajesThunkNext.rejected, (state) => {
        state.status = "FAILED";
      })
      .addCase(fetchCambiarPersonajesThunkPrev.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(
        fetchCambiarPersonajesThunkPrev.fulfilled,
        (state, action: PayloadAction<APIResponse>) => {
          state.status = "COMPLETED";

          state.personajes = action.payload.results;
          state.prev = action.payload.info.prev;
          state.next = action.payload.info.next;
        }
      )
      .addCase(fetchCambiarPersonajesThunkPrev.rejected, (state) => {
        state.status = "FAILED";
      });
  },
});

export const { getCharacters, manejarFiltro } = personajesReducer.actions;
