import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import "./formulario.scss";

emailjs.init("Fao7yWYUPLjOyKJOa");

export const Formulario = () => {
  const [formData, setFormData] = useState({
    nombreApellidos: "",
    emailContacto: "",
    telefonoContacto: "",
    ciudadContacto: "",
    tituloLargometraje: "",
    urlArchivo: "",
    descripcionProyecto: "",
    archivo: null,
    aceptacionDatos: false,
  });

  console.log(formData);
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, archivo: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{9,15}$/.test(phone);
  const validateURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const validatePDF = (file) => file && file.type === "application/pdf";
  const handleSubmit = (e) => {
    e.preventDefault();
    setMensaje("");

    const {
      nombreApellidos,
      emailContacto,
      telefonoContacto,
      ciudadContacto,
      tituloLargometraje,
      urlArchivo,
      descripcionProyecto,
      archivo,
      aceptacionDatos,
    } = formData;

    let valid = true;
    let errores = [];

    if (!nombreApellidos.trim()) {
      errores.push("Introduce tu nombre y apellidos.");
      valid = false;
    }
    if (!emailContacto.trim() || !validateEmail(emailContacto)) {
      errores.push("Introduce un e-mail válido.");
      valid = false;
    }
    if (!telefonoContacto.trim() || !validatePhone(telefonoContacto)) {
      errores.push("Introduce un número de teléfono válido.");
      valid = false;
    }
    if (!ciudadContacto.trim()) {
      errores.push("Introduce una ciudad.");
      valid = false;
    }
    if (!tituloLargometraje.trim()) {
      errores.push("Introduce el título del largometraje.");
      valid = false;
    }
    if (!urlArchivo.trim() || !validateURL(urlArchivo)) {
      errores.push("Introduce una URL válida.");
      valid = false;
    }
    if (!archivo) {
      errores.push("Debes subir un archivo.");
      valid = false;
    } else if (!validatePDF(archivo)) {
      errores.push("El archivo debe ser un PDF.");
      valid = false;
    }
    if (!aceptacionDatos) {
      errores.push("Debes aceptar la política de privacidad.");
      valid = false;
    }

    if (!valid) {
      setMensaje(errores.join("\n"));
      return;
    }

    // Leer archivo como base64 y enviar
    const reader = new FileReader();
    reader.readAsDataURL(archivo);

    reader.onload = () => {
      const archivoBase64 = reader.result.split(",")[1];

      const message = `
        Nombre: ${nombreApellidos}
        E-mail: ${emailContacto}
        Teléfono: ${telefonoContacto}
        Ciudad: ${ciudadContacto}
        Título del cortometraje: ${tituloLargometraje}
        Enlace de descarga: ${urlArchivo}
        Descripción: ${descripcionProyecto}
      `;

      const params = {
        message,
        user_email: emailContacto,
        archivo: archivoBase64,
      };

      const params2 = {
        user_email: emailContacto,
      };

      setLoading(true);
      setMensaje("");

      emailjs
        .send("service_qvdqxmx", "template_qk2cxhf", params)
        .then(() => {
          emailjs
            .send("service_qvdqxmx", "template_ienavga", params2)
            .then(() => {
              setMensaje("Formulario enviado correctamente.");
              setFormData({
                nombreApellidos: "",
                emailContacto: "",
                telefonoContacto: "",
                ciudadContacto: "",
                tituloLargometraje: "",
                urlArchivo: "",
                descripcionProyecto: "",
                archivo: null,
                aceptacionDatos: false,
              });
            });
        })
        .catch((error) => {
          console.error("Error:", error);
          setMensaje(
            "Error al enviar el formulario. Por favor, inténtalo de nuevo."
          );
        })
        .finally(() => {
          setLoading(false);
        });
    };

    reader.onerror = (error) => {
      console.error("Error al leer el archivo:", error);
      setMensaje("Error al procesar el archivo.");
      setLoading(false);
    };
  };

  return (
    <div>
     <img className="participa" src="assets/images/participa.png" alt="participa" />
      <div
        className="rowFormulario"
        style={{
          paddingTop: "20px",
          margin: "0px 10px 20px 10px",
        }}
      >
        <div className="formCol1" style={{ textAlign: "start" }}>
          <img className="image-fade" src="assets/images/19.png" alt="silla director" />
        </div>

        <div className="form_pack" style={{ display: "flex"}}>
          <div style={{ position: "relative", width: "0%" }}>
            <div className="col-form-izq">
              <img
                src="./public/assets/18.png"
                className="noMobile alh-corto"
                alt=""
              />
              <img
                src="./public/assets/8rec.png"
                className="noMobile alh-corto"
                alt=""
              />
            </div>
          </div>

          <div className="col-form" style={{ flex: 1 }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombreApellidos">Nombre y Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreApellidos"
                  name="nombreApellidos"
                  value={formData.nombreApellidos}
                  onChange={handleChange}
                  required
                  placeholder="Introduce tu nombre y apellidos"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="emailContacto">E-mail de Contacto</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailContacto"
                  name="emailContacto"
                  value={formData.emailContacto}
                  onChange={handleChange}
                  required
                  placeholder="Introduce tu e-mail"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="telefonoContacto">Teléfono de Contacto</label>
                <input
                  type="tel"
                  className="form-control"
                  name="telefonoContacto"
                  id="telefonoContacto"
                  value={formData.telefonoContacto}
                  onChange={handleChange}
                  required
                  placeholder="Introduce tu teléfono"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="ciudadContacto">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudadContacto"
                  name="ciudadContacto"
                  value={formData.ciudadContacto}
                  onChange={handleChange}
                  required
                  placeholder="Introduce tu ciudad"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="tituloLargometraje">
                  Título del Cortometraje
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="tituloLargometraje"
                  name="tituloLargometraje"
                  value={formData.tituloLargometraje}
                  onChange={handleChange}
                  required
                  placeholder="Introduce el título del cortometraje"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="urlArchivo">
                  URL del Archivo (WeTransfer o Dropbox)
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="urlArchivo"
                  name="urlArchivo"
                  value={formData.urlArchivo}
                  onChange={handleChange}
                  required
                  placeholder="Introduce la URL del archivo"
                />
              </div>

              <div className="form-group mt-3">
                <label htmlFor="descripcionProyecto">
                  Descripción del Proyecto (opcional)
                </label>
                <textarea
                  className="form-control"
                  id="descripcionProyecto"
                  name="descripcionProyecto"
                  rows="4"
                  value={formData.descripcionProyecto}
                  onChange={handleChange}
                  placeholder="Introduce una descripción del proyecto"
                ></textarea>
              </div>

              <div className="form-group mt-3">
                <label htmlFor="archivo">
                  Subir Ficha Técnica en PDF{" "}
                  <span style={{ fontSize: "10px" }}>(máx: 2Mb)</span>
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="archivo"
                  name="archivo"
                  accept=".pdf"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group form-check mt-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="aceptacionDatos"
                  name="aceptacionDatos"
                  checked={formData.aceptacionDatos}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="aceptacionDatos">
                  Acepto que la Asociación Arrabal-AID maneje mis datos conforme
                  a la{" "}
                  <a
                    href="https://asociacionarrabal.org/politica-de-privacidad"
                    target="_blank"
                    rel="noreferrer"
                  >
                    política de privacidad
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-4"
                style={{ backgroundColor: "#f57927", border: 0 }}
                disabled={loading}
              >
                {!loading ? (
                  <p style={{ margin: 0 }}>Enviar</p>
                ) : (
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                )}
              </button>

              {mensaje && (
                <p id="mensaje" style={{ marginTop: "15px", color: "white" }}>
                  {mensaje}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
