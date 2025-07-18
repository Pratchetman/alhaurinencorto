import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { ExampleCarouselImage } from "./ExampleCarouselImage";

import "./carrusel.scss";
import { images } from "./images";
import { ModalImage } from "./modal/ModalImage";

export const Carrusel = () => {
  const [show, setShow] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const handleShow = (index) => {
    setSelectedUrl(index);
    setShow(!show);
  };

  return (
    <section className="carrusel">
      <details>
        <summary>
          <div>
            <img src="assets/images/imagenes.png" alt="imagenes" />
            <p
              style={{ fontSize: "36px", color: "#e2593a", margin: "4px 4px 6px 4px", fontWeight: 
                "600" }}
              className="pCarrusel"
            ></p>
          </div>
        </summary>

        <div className="gallery">
          <div id="star">
            <img src="assets/images/11.png" alt="estrella hollywood" />
          </div>

          {images.map((src, index) => {
            return (
              <img
                className="oneMiniPic"
                key={index}
                src={src}
                alt={`Imagen ${index + 1}`}
                onClick={() => handleShow(index)}
              />
            );
          })}
        </div>
      </details>
      {show && (
        <ModalImage
          show={show}
          setShow={setShow}
          index={selectedUrl}
          setIndex={setSelectedUrl}
        />
      )}
    </section>
  );
};
