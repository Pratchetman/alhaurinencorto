import React, { useState } from "react";
import "./ediciones.scss";
import { Button } from "react-bootstrap";

export const Ediciones = () => {
  const [selected, setSelected] = useState(5);

  const handleSelect = (edicion) => {
    setSelected(edicion);
  };
  return (
    <section className="ediciones">
      <img
        src="assets/images/otras_ediciones.png"
        alt="titulo otras ediciones"
      />
      <div className="rowEdiciones">
        <div className="edicionesBtnContainer">
          <Button
            className={selected === 4 ? "btn-big" : ""}
            onClick={() => handleSelect(4)}
          >
            2019
          </Button>
          <Button
            className={selected === 3 ? "btn-big" : ""}
            onClick={() => handleSelect(3)}
          >
            2022
          </Button>
          <Button
            className={selected === 2 ? "btn-big" : ""}
            onClick={() => handleSelect(2)}
          >
            2023
          </Button>
          <Button
            className={selected === 1 ? "btn-big" : ""}
            onClick={() => handleSelect(1)}
          >
            2024
          </Button>
          <Button
            className={selected === 5 ? "btn-big" : ""}
            onClick={() => handleSelect(5)}
          >
            2025
          </Button>
        </div>
        <div className="allVideos">
          {selected == 5 && (
            <div style={{ textAlign: "end" }} className="video-big">
              <div className="video-container">
                <iframe
                  width="460"
                  height="818"
                  src="https://www.youtube.com/embed/b0eiabhaydE"
                  title="Alhaurín en Corto 2025 - Arrabal-AID"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          )}
          {selected == 1 && (
            <div style={{ textAlign: "end" }} className="video-big">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/Ms6fXJtZ98I"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="Edicíon 2024"
                  id="iframe_video"
                ></iframe>
              </div>
            </div>
          )}
          {selected == 2 && (
            <div style={{ textAlign: "end" }} class="video-big">
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/2mZULqef0Xg"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="Edicíon 2023"
                  id="iframe_video"
                ></iframe>
              </div>
            </div>
          )}
          {selected == 3 && (
            <div style={{ textAlign: "end" }} class="video-big">
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/0lLB9eAbftE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="Edicíon 2022"
                  id="iframe_video"
                ></iframe>
              </div>
            </div>
          )}
          {selected == 4 && (
            <div style={{ textAlign: "end" }} class="video-big">
              <div class="video-container">
                <iframe
                  src="https://www.youtube.com/embed/jHUw7Rig03U"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  title="Edicíon 2019"
                  id="iframe_video"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
