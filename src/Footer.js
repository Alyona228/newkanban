import React from 'react'
import './Footer.css'

function Footer(params) {
  return (
    <div className='footer'>
      <div className='footer__left'>Active tasks: &#8249;N&#8250; </div>
      <div className='footer__centr'>Finished tasks: &#8249;M&#8250; </div>
      <div className='footer__right'>Kanban board by Алёна, 2020</div>
    </div>
  )
}

export default Footer
