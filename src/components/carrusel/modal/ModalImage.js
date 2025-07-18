import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { images } from "../images";
import "./modalImage.scss";

export const ModalImage = ({ show, setShow, index, setIndex }) => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Mínimo desplazamiento para considerar swipe

    if (deltaX > threshold && index < images.length - 1) {
      // Swipe left
      setIndex(index + 1);
    } else if (deltaX < -threshold && index > 0) {
      // Swipe right
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    setLoading(true);
  }, [index]);

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Body>
        <div
          className="modalImg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {index > 0 && (
            <div className="arrowLeft" onClick={() => setIndex(index - 1)}>
              <p>&lt;</p>
            </div>
          )}
          {loading && (
            <div className="spinner-container">
              <div className="spinner"></div>
            </div>
          )}
          <img
            src={images[index].replace("mini/", "")}
            alt="Imagen Galería"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onLoad={()=>setLoading(false)}
          />
          <div className="alhCortoModal">
            <img src="assets/images/logobg.png" alt="logomini" />
          </div>
          {index < images.length - 1 && (
            <div className="arrowRight" onClick={() => setIndex(index + 1)}>
              <p>&gt;</p>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};
