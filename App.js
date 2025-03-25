"use client"

import { useState } from "react"
import "./App.css"

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>SoundWaves</h1>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#episodios">Episodios</a>
            <a href="#produccion">Producción</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Sección Inicio */}
      <section id="inicio" className="hero">
        <div className="container">
          <h1>SoundWaves</h1>
          <p>Tu podcast sobre tecnología, cultura y entretenimiento</p>
          <button className="button-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            Escuchar ahora
          </button>
        </div>
      </section>

      {/* Sección Episodios */}
      <section id="episodios" className="section">
        <div className="container">
          <h2>Episodios</h2>

          <div className="episode-card">
            <div className="episode-info">
              <span className="episode-number">Episodio 5</span>
              <h3>El futuro de la inteligencia artificial</h3>
              <p>
                En este episodio exploramos las últimas tendencias en IA y cómo están transformando nuestra forma de
                trabajar y vivir.
              </p>
            </div>
            <AudioPlayer />
          </div>

          <div className="episode-card">
            <div className="episode-info">
              <span className="episode-number">Episodio 4</span>
              <h3>Desarrollo web en 2025</h3>
              <p>
                Las tecnologías que dominarán el desarrollo web este año. Analizamos frameworks, herramientas y
                metodologías.
              </p>
            </div>
            <AudioPlayer />
          </div>

          <div className="episode-card">
            <div className="episode-info">
              <span className="episode-number">Episodio 3</span>
              <h3>Entrevista con María López</h3>
              <p>Hablamos con la experta en ciberseguridad sobre los retos actuales en la protección de datos.</p>
            </div>
            <AudioPlayer />
          </div>
        </div>
      </section>

      {/* Sección Producción */}
      <section id="produccion" className="section gray-bg">
        <div className="container">
          <h2>Proceso de Producción</h2>

          <div className="production-grid">
            <div className="production-text">
              <h3>Nuestro Estudio</h3>
              <p>
                Contamos con un estudio equipado con la mejor tecnología para garantizar la calidad de sonido en cada
                episodio. Utilizamos micrófonos de condensador, interfaces de audio y tratamiento acústico.
              </p>
              <p>
                Cada episodio pasa por un riguroso proceso de pre-producción, grabación, edición y masterización antes
                de ser publicado.
              </p>
            </div>
            <div className="production-image">
              <img src="https://placehold.co/600x400" alt="Estudio de grabación" />
            </div>
          </div>

          <h3 className="centered">Proceso de Creación</h3>

          <div className="process-grid">
            <div className="process-card">
              <h4>1. Grabación</h4>
              <p>Utilizamos Audacity para grabar nuestras voces con micrófonos de condensador a 44.1kHz y 24 bits.</p>
            </div>
            <div className="process-card">
              <h4>2. Edición</h4>
              <p>
                Eliminamos ruidos de fondo, silencios innecesarios y errores de grabación para mantener un ritmo
                dinámico.
              </p>
            </div>
            <div className="process-card">
              <h4>3. Música</h4>
              <p>Incorporamos música de fondo libre de derechos y efectos sonoros para enriquecer la experiencia.</p>
            </div>
            <div className="process-card">
              <h4>4. Exportación</h4>
              <p>Exportamos el audio final en formato MP3 a 192kbps para una reproducción fluida en la web.</p>
            </div>
          </div>

          <div className="tools-section">
            <h3 className="centered">Herramientas que utilizamos</h3>
            <div className="tools-grid">
              <div className="tool-card">
                <img src="https://placehold.co/80x80" alt="Audacity" />
                <h4>Audacity</h4>
                <p>Grabación y edición</p>
              </div>
              <div className="tool-card">
                <img src="https://placehold.co/80x80" alt="FFmpeg" />
                <h4>FFmpeg</h4>
                <p>Conversión de audio</p>
              </div>
              <div className="tool-card">
                <img src="https://placehold.co/80x80" alt="Adobe Audition" />
                <h4>Adobe Audition</h4>
                <p>Masterización</p>
              </div>
              <div className="tool-card">
                <img src="https://placehold.co/80x80" alt="Canva" />
                <h4>Canva</h4>
                <p>Diseño de portadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="section">
        <div className="container">
          <h2>Contacto y Participación</h2>

          <div className="tabs">
            <div className="tab-buttons">
              <TabButton active={true} label="Contacto" />
              <TabButton active={false} label="Participación" />
            </div>

            <div className="tab-content">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre" />
                  </div>
                  <div className="form-group">
                    <label>Correo electrónico</label>
                    <input type="email" placeholder="tu@email.com" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Asunto</label>
                  <input type="text" placeholder="Asunto de tu mensaje" />
                </div>

                <div className="form-group">
                  <label>Mensaje</label>
                  <textarea placeholder="Escribe tu mensaje aquí" rows="5"></textarea>
                </div>

                <button type="submit" className="button-primary">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} SoundWaves. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

// Componente simple para el reproductor de audio
function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="audio-player">
      <div className="progress-bar">
        <div className="progress" style={{ width: "30%" }}></div>
      </div>
      <div className="controls">
        <button className="control-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="19 20 9 12 19 4 19 20"></polygon>
            <line x1="5" y1="19" x2="5" y2="5"></line>
          </svg>
        </button>

        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>

        <button className="control-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 4 15 12 5 20 5 4"></polygon>
            <line x1="19" y1="5" x2="19" y2="19"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}

// Componente simple para los botones de pestañas
function TabButton({ active, label }) {
  return <button className={`tab-button ${active ? "active" : ""}`}>{label}</button>
}

export default App

