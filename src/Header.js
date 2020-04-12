import React from 'react'
import './Header.css'
import avatar from './images/user-avatar.svg'
import arrow from './images/arrow-down.svg'

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div>
          <h1 className='header__title'>Awesome Kanban Board</h1>
        </div>
        <div className='header__avatar'>
          <img src={avatar} alt='это аватар' />
        </div>
        <button className='header__button'>
          <img src={arrow} alt='это аватар' className='header__arrow' />
        </button>
      </div>
    )
  }
}
