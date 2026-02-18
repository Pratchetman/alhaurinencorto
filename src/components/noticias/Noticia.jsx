import React from "react";

export const Noticia = ({ news }) => {
function formatFecha(isoString) {
  if (!isoString) return "";

  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

  return (
    <a href={news.guid.rendered} rel="noreferrer" target="_blank" className="newsItem">
      <div>
        <img alt="titulo noticia" src={news.uagb_featured_image_src.medium[0]} className="thumbnail"/>
        <p className="newsDate">{formatFecha(news.date)}</p>
      </div>
      <p className="newsTitle">{news.title.rendered}</p>
      <img src="./assets/images/15.png" alt="logo star" className="estrella_pequena" />
    </a>
  );
};
