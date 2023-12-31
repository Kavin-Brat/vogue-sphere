import { configureStore } from "@reduxjs/toolkit";
import userDetailsReducer from "./userDetails";
import dashboardReducer from "./dashboard";

export const store = configureStore({
  reducer: { userDetails: userDetailsReducer, dashboard: dashboardReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
