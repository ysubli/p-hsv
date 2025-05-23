import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Bienvenue à l'Hôpital HSV</h1>
      <p>Votre santé, notre priorité.</p>
      <Carousel />
  
      <div className="rdv-button-container">
        <button className="rdv-button">
          Prendre RDV
        </button>
      </div>
      
      <section className="cards-section">
        <h2>Nos prestations</h2>
        <div className="cards-container">
          <div className="card">
            <img src="/images/hospital.jpg" alt="" className="card-image" />
            <h3>Services de qualité</h3>
            <p>Notre hôpital propose une gamme complète de services médicaux avec des équipements de pointe pour assurer les meilleurs soins possibles à nos patients.</p>
          </div>
          
          <div className="card">
            <img src="/images/doctors.jpg" alt="" className="card-image" />
            <h3>Équipe expérimentée</h3>
            <p>Notre personnel médical hautement qualifié et expérimenté est dédié à fournir des soins personnalisés et attentionnés à chaque patient.</p>
          </div>
          
          <div className="card">
            <img src="/images/emergency.jpg" alt="" className="card-image" />
            <h3>Disponibilité 24/7</h3>
            <p>Nos services d'urgence sont disponibles 24 heures sur 24, 7 jours sur 7, pour répondre à tous vos besoins médicaux urgents.</p>
          </div>
        </div>
        
        <div className="cards-container">
          <div className="card">
            <img src="/images/treatment.jpg" alt="" className="card-image" />
            <h3>Traitements innovants</h3>
            <p>Nous utilisons les dernières avancées médicales et technologies pour offrir des traitements innovants et efficaces.</p>
          </div>
          
          <div className="card">
            <img src="/images/care.jpg" alt="" className="card-image" />
            <h3>Approche humaine</h3>
            <p>Au-delà des soins médicaux, nous privilégions une approche humaine et bienveillante pour le bien-être complet de nos patients.</p>
          </div>
          
          <div className="card">
            <img src="/images/access.jpg" alt="" className="card-image" />
            <h3>Accessibilité</h3>
            <p>Notre établissement est facilement accessible et nous proposons également des consultations à distance pour plus de flexibilité.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
