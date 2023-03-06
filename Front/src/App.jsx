import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

// Components
import { Home } from "./components/Dashboard/Home";
import { FormLogin } from "./components/Login/LoginForm";
import { NotFound } from "./context/ApiContext";
import { GuaranteeView } from "./components/Dashboard/Guarantee";
import { UserView } from "./components/Dashboard/Users";
import ForgotPass from "./components/Login/ForgotPass";
import TokenValidation from "./components/Login/TokenValidation";
import ReduxPrueba from "./components/Login/ReduxPrueba";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<FormLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/users" element={<UserView />} />
        <Route path="/guarantee" element={<GuaranteeView />} />
        <Route path="/token-validation" element={<TokenValidation />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/redux-prueba" element={<ReduxPrueba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
