import React from 'react';

// Styles
import './ProfessorCard.css';

const ProfessorCard = ({data}) => {
  // const {nombre,especializ}
  return (
    <div className='card-container'>
      <div className='info-container'>
        <div className='info-image'>
          <img  src='https://www.uaq.mx/informatica/img/fotos_maestros/inc/mauricio.png' alt='Professor image'/>
        </div>
        <div className='info'>
          <p className='info-name'>Nombre del profesor</p>
          <p className='info-specialization'>Especialización</p>
          <p className='info-schedule'>Lunes a Viernes de 7:00 - 15:00</p>
          <p className='info-location'>Cubiculo: Centro de Desarrollo</p>
        </div>
      </div>
      <p className='card-status'>Disponible, no se encuentra en clase.</p>
    </div>
  )
}

export default ProfessorCard;