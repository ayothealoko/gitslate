import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./status/statusSlice";
import { serverApi } from "./api/server";

export const store = configureStore({
  reducer: {
    [serverApi.reducerPath]: serverApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serverApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
