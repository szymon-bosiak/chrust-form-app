import React from 'react'
import './hero.css'
import { GiWoodStick } from 'react-icons/gi'
import BG from '../../assets/ng.jpg'
import SIDE from '../../assets/side1.jpg'

const hero = () => {
  return (
    <section id='hero'>
          <div className="header_main">

              <div className="logo">
                  <GiWoodStick className='logo_icon' />
              </div>

              <div className="header_content">
                  <h1>Chrust+</h1>
                  <p>Krajowy programu zbierania chrustu</p>
              </div>

          </div>

          <div className="background">
              <img src={BG} alt="leśny pejzarz" className='first_img'/>
        <img src={SIDE} alt="leśny pejzarz" className='second_img' />
          </div>
    </section>
  )
}

export default hero