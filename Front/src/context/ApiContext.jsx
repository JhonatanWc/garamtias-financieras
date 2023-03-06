import { useRouteError } from "react-router-dom";
import { useState } from "react";

export function getApiUrl() {
  return "https://apirest.atc-onlinead.com";
  // return "http://127.0.0.1:8000";
}

export function NotFound() {
  //const error = useRouteError();
  //console.log(error);

  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      {/*<p>{error.statusText || error.message}</p>*/}
    </div>
  );
}
