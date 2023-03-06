import "./assets/wckit/css/style.css";
import "./assets/wckit/css/wckit.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FormLogin /> */}
    <Provider store={store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);
