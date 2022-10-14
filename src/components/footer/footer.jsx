import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <section id='footer'>
      <div className="footer">
        <div className="footer_content">
          <div className="left">
            <p>© 2022 Bośland SA</p>
          </div>

          <div className="right">
            <a href="https://www.google.com">Regulamin</a>
            <a href="https://www.google.com">Patroni</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default footer