import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Detalle, Episodio } from "../interfaces/interface";
import { traerEpisodios } from "../services/detalle.services";

interface InitialState {
  status: "IDLE" | "LOADING" | "COMPLETED" | "FAILED";
  personaje: Detalle;
  arrayEpisodios: number[];
  episodio: Episodio[];
}

const initialState: InitialState = {
  status: "IDLE",
  personaje: {
    id: 0,
    name: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
  },
  arrayEpisodios: [],
  episodio: [],
};

export const fetchEpisodiosThunk = createAsyncThunk(
  "episodios/fetchThunk",
  async (episodios: number[]) => {
    try {
      const eps: Episodio[] = await traerEpisodios(episodios);
      return eps;
    } catch (e) {
      return [];
    }
  }
);

export const detalleReducer = createSlice({
  name: "detalles",
  initialState,
  reducers: {
    guardarPersonaje: (state, action) => {
      state.personaje = action.payload;
    },
    guardarIDEpisodio: (state, action) => {
      state.arrayEpisodios.push(action.payload);
    },
    guardarEpisodio: (state, action) => {
      state.episodio = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodiosThunk.pending, (state) => {
        state.status = "LOADING";
      })
      .addCase(
        fetchEpisodiosThunk.fulfilled,
        (state, action: PayloadAction<Episodio[]>) => {
          state.status = "COMPLETED";
          state.episodio = action.payload;
        }
      )
      .addCase(fetchEpisodiosThunk.rejected, (state) => {
        state.status = "FAILED";
      });
  },
});

export const { guardarPersonaje, guardarIDEpisodio, guardarEpisodio } =
  detalleReducer.actions;
