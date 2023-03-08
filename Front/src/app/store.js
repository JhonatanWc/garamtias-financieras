import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../features/tasks/pizzaSlice';
import loginConfirmReducer from '../features/tasks/loginConfirmSlice';

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    loginConfirm: loginConfirmReducer
  }
})