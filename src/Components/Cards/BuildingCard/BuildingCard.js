import React from "react";
import './BuildingCard.css';
const BuildingCard = (props) => {
  return (
    <section className="room-card">
      <div className="number-room-card center-div">
        <div className = "number-container center-div">
        <h1 className = "title-room">A01</h1>
        </div>
      </div>
      <div className="information-side">
        <h2 className = "number-room-title">Número del Salón</h2>
        <p class = "status-room">Estado: En clase</p>
        <p class = "info-teacher-schedule">Impartiendo: <strong> Nombre del <br/> maestro</strong>, de <strong>11:00 a 13:00</strong></p>
        <p class = "info-place">Edificio: Nuevo</p>
      </div>
    </section>
  );
};
export default BuildingCard;
