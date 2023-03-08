import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../features/tasks/pizzaSlice';
import loginConfirmReducer from '../features/tasks/loginConfirmSlice';
import appStateReducer from "../features/tasks/appStateSlice";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    loginConfirm: loginConfirmReducer,
    appState: appStateReducer
  }
})