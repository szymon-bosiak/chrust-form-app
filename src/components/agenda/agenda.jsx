import React from 'react'
import './agenda.css'
import { HiFire } from 'react-icons/hi'
import { HiMoon } from 'react-icons/hi'
import { HiGlobe } from 'react-icons/hi'

const agenda = () => {
  return (
    <section id='agenda'>
      <div className="agenda">
        <div className="header_agenda">
          <h1>Pomóż nam ogrzać Polskie domy</h1>
          <p>wraz z tysiącami innych wolontariuszy</p>
        </div>

        <div className="elements">
          <div className="element">
            <HiFire className="element_icon" />
            <h3>Dlaczego chrust?</h3>
            <p>Chrust jes dobrze palącym się żródłem energii, którm łatwo możemy palić w domowych piecach lub kominkach.</p>
          </div>

          <div className="element">
            <HiMoon className="element_icon" />
            <h3>Nocne zmiany</h3>
            <p>Jeśli jesteś zajęty pracą na dwa etaty, nie ma problemu! Organizujemy zbieranie chrustu również w godzinach nocnych.</p>
          </div>

          <div className="element">
            <HiGlobe className="element_icon" />
            <h3>Dobre dla środowiska</h3>
            <p>Chrust zbieramy z lasu, więc jest organiczny. Wiadomo również, że wszystko co jest organiczne jest również ekologiczne.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default agenda