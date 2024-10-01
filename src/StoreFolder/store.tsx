import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../ReduxSlices/TodaysMenuSlice";

export const store = configureStore({
  reducer: { menu: menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
