import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <img 
          src="https://assets.about.me/background/users/r/o/g/rogeliobautistasanchez_1465761673_77.jpg" 
          alt="Erick Josafat Estrada Gutiérrez" 
          className="profile-img" 
        />
        <h1>Erick Josafat Estrada Gutiérrez</h1>
        <h2>Ingeniero en Programación Multiplataforma</h2>
        <p className="location">Querétaro, México — 20 años</p>
      </div>

      <div className="cv-body">
        <section>
          <h3>🎓 Educación</h3>
          <p><strong>Universidad:</strong> Universidad Tecnológica del Estado de Querétaro (UTEQ)</p>
        </section>

        <section>
          <h3>💻 Habilidades Técnicas</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>Angular</li>
            <li>PHP</li>
            <li>Node.js</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>Docker</li>
            <li>MySQL</li>
          </ul>
        </section>

        <section>
          <h3>🧑‍💼 Experiencia Profesional</h3>
          <p><strong>Implementaciones260</strong> – Desarrollador Full Stack (1 año)</p>
          <p><strong>TODON1</strong> – Desarrollador Full Stack (1 año)</p>
        </section>
      </div>
    </div>
  );
}

export default App;
