import React from "react";
import "./footer.scss"

export const Footer = () => {
  return (
    <>
    <div className="footerRow">
      <img className="footer1" src="assets/images/logo-blanco-web.png" alt="organizador Arrabal" />
      <div className="footer2">
        <img className="logoFoot1" src="assets/images/logopenitenciarias.png" alt="logo penitenciaria"/>
      </div>
    </div>
    <p className="derechos">&copy; Asociación Arrabal-AID, 2025. Todos los derechos reservados.</p>
    </>
  );
};
