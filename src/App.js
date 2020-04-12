import React from 'react'
import './App.css'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
// import Item from 'Item.js'

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
