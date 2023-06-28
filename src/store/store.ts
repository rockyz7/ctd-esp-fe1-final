import { configureStore } from "@reduxjs/toolkit";
import { personajesReducer } from "../reducers/personajesReducer";
import { favoritosReducer } from "../reducers/favoritosReducer";

export const store = configureStore({
  reducer: {
    personajes: personajesReducer.reducer,
    favoritos: favoritosReducer.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
