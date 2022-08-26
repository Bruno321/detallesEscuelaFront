import React from 'react';

// Style
import './Footer.css';
// Assets
import facebook from '../../Assets/facebook.svg';
import instagram from '../../Assets/instagram.svg';
import twitter from '../../Assets/twitter.svg';

const Footer = () => {
  return (
    <footer>  
      <div className='section-left'>
        <p>Conoce tu facultad</p> 
        <p className='department'>Centro de Desarrollo 2022</p>
      </div>
      <div className='section-right'>
        <p>Siguenos en:</p>
        <div className='container-socialMedia'>
          <img src={facebook} alt='Icon Facebook' />
          <img src={instagram} alt='Icon Instagram' />
          <img src={twitter} alt='Icon Twitter' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;