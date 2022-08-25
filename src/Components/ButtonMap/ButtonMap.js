import React, {useState} from 'react';

// Styles
import './ButtonMap.css';
// Assets
import iconMap from '../../Assets/icon/location-marker.svg';
// Modal
import Modal from './Modal';

const ButtonMap = () => {

  const [openModal, setopenModal] = useState(false);


  return (
    <>
      <div className='button-container' onClick={() => setopenModal(true)}>
        <p className='button-text'>Ver croquis</p>
        <img className='button-icon' src={iconMap} alt='Icon map' />
      </div>
      <Modal open={openModal} onClose={() => setopenModal(false)} />
    </>   
  )
}

export default ButtonMap;