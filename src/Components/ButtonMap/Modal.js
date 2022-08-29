import React from 'react';

// Styles
import './ButtonMap.css';
// Assets
import croquis from '../../Assets/img/croquis.jpg';

const Modal = ({ open, onClose }) => {
  
  if(!open) return null;

  return (
    <div className='overlay'>
      <div className='modal-container'>
        <p onClick={onClose}>x</p>
        <img className='modal-image' src={croquis} alt='Croquis Facultad de Informática'/>
      </div>
    </div>
  )
}

export default Modal;