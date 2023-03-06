import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer  from '../features/tasks/pizzaSlice';

export const store = configureStore({
  reducer: {pizza: pizzaReducer}
})