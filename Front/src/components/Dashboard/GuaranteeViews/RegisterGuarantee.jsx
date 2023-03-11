import axios from "axios";
import { getApiUrlBase } from "../../../context/ApiContext";
import { useSelector } from "react-redux";
import { useState } from "react";
export function RegisterGuarantee() {
  const [formFile, setFormFile] = useState("");
  const loginState = useSelector((state) => state.loginConfirm);
  const handleFile = (e) => {
    setFormFile(e.target.files[0]);
  };

  const handleFileTabnNine = (e) => {
    e.preventDefault();
    console.log("entre al handle");
    console.log(
      "🚀 ~ file: RegisterGuarantee.jsx:49 ~ handleFileTabnNine ~ file:",
      formFile
    );
    let formData = new FormData();
    formData.append("file", formFile);
    formData.append("management", "register");
    formData.append("login_id", "2");

    console.log("obtener valores del form data");
    console.log(formData.get("file"));
    console.log(formData.get("management"));
    console.log(formData.get("login_id"));
    console.log(
      "🚀 ~ file: RegisterGuarantee.jsx:45 ~ handleFileTabnNine ~ formData:",
      formData
    );
    console.log(
      "🚀 ~ file: RegisterGuarantee.jsx:59 ~ .post ~ getApiUrlBase() + register-guarantee: ",
      getApiUrlBase() + "register-guarantee"
    );

    console.log(
      "🚀 ~ file: RegisterGuarantee.jsx:42 ~ .post ~ loginState.token:",
      loginState.token
    );
    axios
      .post(getApiUrlBase() + "register-guarantee", formData, {
        headers: {
          Authorization: `Bearer ${loginState.token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(
          "🚀 ~ file: RegisterGuarantee.jsx:14 ~ handleFile ~ response:",
          response.data
        );
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>Que vamos a registrar</h1>
      <form onSubmit={handleFileTabnNine} enctype="multipart/form-data">
        <div>
          <div>
            <label>Selecciona el tipo de archivo a subir</label>
            <select>
              <option>Registros de garantias</option>
              <option>Actualizacion de garantias</option>
              <option>Recuperacion de garantias</option>
              <option>Reclamaciones de garantias</option>
            </select>
          </div>
          <div>
            <label>Selecciona el archivo</label>
            <input type="file" onChange={handleFile} />
          </div>
        </div>
        <button>Enviar</button>
        <div>
          <button>Cancelar</button>
        </div>
      </form>
    </>
  );
}
