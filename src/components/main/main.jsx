import React from 'react'
import './main.css'

//import components
import Hero from '../hero/hero.jsx'
import Form from '../form/form.jsx'
import Agenda from '../agenda/agenda.jsx'
import Disclaimer from '../disclaimer/disclaimer.jsx'


const main = () => {
  return (
    <section id='main'>
      <div className="main_content">
        <Hero />
        <Form />
        <Agenda />
        <Disclaimer />
      </div>
    </section>
  )
}

export default main