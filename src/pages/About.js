import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>À propos de l'hôpital HSV</h1>
      
      <section className="about-section">
        <h2>Notre histoire</h2>
        <p>
          Fondé en 1985, l'hôpital HSV est devenu une référence dans le domaine médical en France. 
          Avec plus de 35 ans d'expérience, notre établissement a su évoluer constamment pour offrir 
          des soins de grande qualité et un accompagnement personnalisé à chaque patient.
        </p>
        <p>
          Notre mission est de fournir des soins médicaux exceptionnels dans un environnement 
          confortable et accueillant. Nous nous engageons à placer le bien-être du patient au 
          cœur de toutes nos décisions et actions.
        </p>
      </section>
      
      <section className="carousel-section">
        <h2>Notre établissement en images</h2>
        <Carousel />
      </section>
      
      <section className="values-section">
        <h2>Nos valeurs</h2>
        <div className="values-container">
          <div className="value-item">
            <h3>Excellence</h3>
            <p>Nous visons constamment l'excellence dans tous les aspects de nos services médicaux.</p>
          </div>
          <div className="value-item">
            <h3>Compassion</h3>
            <p>Nous traitons chaque patient avec respect, dignité et une attention bienveillante.</p>
          </div>
          <div className="value-item">
            <h3>Innovation</h3>
            <p>Nous adoptons les dernières technologies et méthodes de traitement pour améliorer les soins.</p>
          </div>
          <div className="value-item">
            <h3>Intégrité</h3>
            <p>Nous agissons avec honnêteté et transparence dans toutes nos interactions.</p>
          </div>
        </div>
      </section>
      
      <section className="map-section">
        <h2>Nous trouver</h2>
        <div className="map-container">
          <div className="map">
            {/* Intégration directe de Google Maps */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sImaginary%20Hospital!5e0!3m2!1sfr!2sfr!4v1596188684948!5m2!1sfr!2sfr"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation de l'hôpital HSV"
            ></iframe>
          </div>
          <div className="contact-info">
            <h3>Adresse</h3>
            <p>123 Avenue de la Santé, 75000 Paris</p>
            <h3>Téléphone</h3>
            <p>01 23 45 67 89</p>
            <h3>Email</h3>
            <p>contact@hopital-hsv.fr</p>
            <h3>Heures d'ouverture</h3>
            <p>Services administratifs: Lun-Ven, 8h-18h</p>
            <p>Urgences: 24h/24, 7j/7</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
