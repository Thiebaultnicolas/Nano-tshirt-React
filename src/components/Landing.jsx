import React, { useState, useEffect } from 'react'
import '../styles/Landing.css'

function Landing() {
  const [scrollTarget, setScrollTarget] = useState(null);

  useEffect(() => {
    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: 'smooth' });
      setScrollTarget(null);
    }
  }, [scrollTarget]);

  return (
    <div className='full-screen '>
        <div className='background'>
          <div className='slide-inner'>
            <div className='animated text-slider'>
              <h1 className='title'>Nano Shirt</h1>
              <h2 className='subtitle'>Habillez-vous avec style sans vous ruiner !</h2>
            </div>
            <a className="button-line" href="#scroll" onClick={(e) => {
              e.preventDefault();
              setScrollTarget(document.querySelector('#scroll'));
            }}>ICI</a> 
          </div>
        </div>
    </div>
  )
}

export default Landing