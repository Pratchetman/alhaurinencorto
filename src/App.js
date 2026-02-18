import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Ediciones } from "./components/ediciones/Ediciones";
import { Carrusel } from "./components/carrusel/Carrusel";
import { Formulario } from "./components/formulario/Formulario";
import { Footer } from "./components/footer/Footer";
import { Button, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { Noticia } from "./components/noticias/Noticia";

function App() {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(noticias);

  useEffect(() => {
    setLoading(true);
    const fetchNoticias = async () => {
      try {
        const response = await axios.get(
          "https://asociacionarrabal.org/wp-json/wp/v2/posts?tags=1387",
        );
        setNoticias(response.data.slice(0,3));
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };

    fetchNoticias();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      <section>
        <img
          className="logoImage"
          src="assets/images/alhaurinLogo.png"
          alt=""
        />
        <div className="bigText">
          <img
            className="logobg"
            src="assets/images/logobg.png"
            alt=""
          />
          <div className="texto_festival">
            <h2>XVII EDICIÓN DEL FESTIVAL DE CORTOS</h2>

            <h4>
              <span>
                <img src="assets/images/15.png" alt="" />
              </span>
              EL ÚNICO FESTIVAL DE CORTOS QUE SE CELEBRA DENTRO DE UN CENTRO
              PENITENCIARIO CON LA ASISTENCIA DE LOS DIRECTORES/AS.
            </h4>
            <Button href="#formulario" style={{marginTop: "30px"}}>¡Muy pronto nueva edición!</Button>
            <img
              className="texto_festival_bg"
              id="texto_festival_bg"
              src="assets/images/15.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="info">
        <img
          src="assets/images/3.png"
          style={{ marginBottom: "-10px" }}
          alt="¿QUÉ ES?"
        />
        <p>
          <b>'Alhaurín en Corto'</b>, que organiza la{" "}
          <b>Asociación Arrabal-AID</b> en colaboración con la Secretaría
          General de Instituciones Penitenciarias, es un festival de
          cortometrajes que se celebra en el{" "}
          <b>Centro Penitenciario de Alhaurín de la Torre</b> con el fin de
          acercar diferentes propuestas culturales y valerse del cine como
          herramienta para favorecer la reinserción social y laboral de las
          personas en situación de privación de libertad.
        </p>
        <p>
          El certamen, impulsado por la <b>Asociación Arrabal-AID</b>, se
          celebra este año bajo el eslogan <b>‘Protagonistas de su historia’</b>
          , con el que se busca subrayar cómo el cine se convierte en un medio
          para resignificar el pasado, proyectar el futuro y reconstruir la
          identidad desde la expresión creativa. Además, las personas no son
          meras espectadoras o personajes secundarios durante este festival: Son
          jurado, son público y son protagonistas de una experiencia cultural
          que invita a mirar, pensar y decidir.
        </p>
        <details>
          <summary>
            <div>
              <img src="assets/images/7.png" alt="¿Dónde?" />
              <p
                style={{ fontSize: "36px", color: "#e2593a", margin: "4px" }}
              ></p>
            </div>
          </summary>
          <ul>
            <img
              id="star"
              src="assets/images/17.png"
              alt=""
            />
            <li>
              El certamen mantiene su carácter presencial, permitiéndose el
              tradicional encuentro con creadores y cineastas en el{" "}
              <b>Centro Penitenciario de Alhaurín de la Torre</b> (Málaga), una
              oportunidad para que hombres y mujeres en situación de privación
              de libertad intercambien opiniones y pregunten aquellos aspectos
              que más les llaman la atención sobre la industria del cine, como
              el proceso para plasmar sus ideas en imágenes o las horas de
              trabajo que hay detrás de un corto o lo dificil que resulta
              abrirse camino en esta profesión.
            </li>
          </ul>
        </details>
        <details>
          <summary>
            <div>
              <img
                id="cuando"
                src="assets/images/9.png"
                style={{ height: "150px", marginBottom: "-48px" }}
                alt="¿cuándo?"
              />
              <p
                style={{ fontSize: "36px", color: "#e2593a", margin: "4px" }}
              ></p>
            </div>
          </summary>
          <ul>
            <img
              id="star"
              src="assets/images/14.png"
              alt=""
            />
            <li>
              La <b>XVIII edición de Alhaurín en Corto</b> se celebrará en septiembre
              de 2026. Fecha de lanzamiento del concurso y de la presentación
              aún por confirmar. Para más información, consulta las redes
              sociales de @arrabalaid.
            </li>
          </ul>
        </details>

        {/* <details className="basesTitle">
          <summary>
            <div>
              <img src="assets/images/ALHAURIN-25-5.png" alt="logo festival" />
              <p
                style={{ fontSize: "36px", color: "#e2593a", margin: "4px" }}
              ></p>
            </div>
          </summary>
          <ul>
            <img
              id="star"
              src="assets/images/15.png"
              alt="estrella hollywood"
            />
            <li>
              El plazo de recepción de cortometrajes será desde el 1 de julio de
              2025 hasta el 10 de agosto de 2025 a las 23:59h.
            </li>
            <li>El cortometraje será de temática libre. En idioma español.</li>
            <li>
              Los subtítulos en español en los cortometrajes son obligatorios.
            </li>
            <li>
              Los cortometrajes presentados deberán haber sido grabados y
              publicados desde 1 de enero de 2022 hasta el 10 de agosto de 2025.
            </li>
            <li>Sólo serán válidos los formatos de vídeo .mp4, .mov y .mpg.</li>
            <li>
              La duración del cortometraje no podrá superar los 15 minutos.
            </li>
            <li>
              Es necesario aportar ficha artística y técnica (número de teléfono
              y correo electrónico) con los nombres y apellidos de las personas
              que componen el equipo.
            </li>
            <li>
              Sólo serán válidos los cortometrajes presentados de directores/as
              que residan en España (incluida ficha técnica).
            </li>
            <li>Sólo se seleccionará un cortometraje por director/a.</li>
            <li>
              Asistencia: Será obligatorio que acudan al Centro Penitenciario de
              Alhaurín de la Torre las personas responsables de los
              cortometrajes elegidos (o bien, alguien en su lugar que forme
              parte del equipo técnico o artístico).
            </li>
            <li>
              ¿Cómo mandarlo? Tienes dos opciones: Envía en un archivo
              comprimido tu cortometraje y la ficha técnica y artística mediante
              enlace de WeTransfer o Dropbox (Atención: Intenta que la
              transferencia no caduque en menos de tres días); o bien, mándanos
              el enlace de tu cortometraje subido a alguna plataforma online
              como Vimeo o YouTube acompañado de la ficha técnica y artística en
              un archivo comprimido.
            </li>
            <li>
              Evaluación y selección de finalistas: un jurado multidisciplinar
              compuesto por profesionales del ámbito audiovisual, expertos en
              reinserción social y representantes de la organización analizará
              las propuestas recibidas, valorando los siguientes criterios:
              <ul>
                <li> Originalidad y creatividad del enfoque narrativo.</li>
                <li>Calidad técnica y artística de la producción.</li>
                <li>
                  Impacto social y capacidad de generar reflexión en la
                  audiencia.
                </li>
                <li>
                  Diversidad de géneros y estilos, fomentando una programación
                  variada.
                </li>
              </ul>
            </li>
            <li>
              La organización cubrirá los gastos de desplazamiento y alojamiento
              de los representantes de los cortos elegidos que provengan de
              fuera de la provincia de Málaga, por un máximo de 150 euros por
              persona y noche.
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://asociacionarrabal.org/wp-content/uploads/2025/07/NdP-.-Alhaurin-en-Corto-2025-previa-1.pdf"
              >
                Enlace a la nota.
              </a>
            </li>
          </ul>
        </details> */}
      </section>
      <section>
        <Carrusel />
      </section>
      <Ediciones />
      <section id="formulario">
        <Formulario />
      </section>
      <section className="ultimasNoticias">
        <img src="./assets/images/noticias.png" alt="noticias" className="noticiasImg"/>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          <div className="newsContainer">
            {noticias.map((news, index) => {
              return <Noticia  key={news.id} news={news} />;
            })}
          </div>
        )}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
