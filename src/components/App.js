import React from 'react'

import Pages from './Pages'

import './main.css'
import './grid.css'

const Menu = function(){
  
  return (
    <ul id="menu">
      <h1><a href="#Penguin">PENGUIN WEB</a></h1>
      <ul className="sub-menu">
        <div><a href="#Stiqr">STARTUPS</a></div>
        <li><a href="#Stiqr">Stiqr</a></li>
        <li><a href="#Startuptabs">Startuptabs</a></li>
        <li><a href="#Amplfy">Amplfy</a></li>
      </ul>
      <ul className="sub-menu">
        <div><a href="#Honeybadger">OPENSOURCE</a></div>
        <li><a href="#Honeybadger">Honeybadger</a></li>
        <li><a href="#Hackable">Hackable</a></li>
      </ul>
      <ul className="sub-menu">
        <div><a href="#About">ABOUT US</a></div>
      </ul>
      <ul className="sub-menu">
        <div><a href="#Contact">CONTACT US</a></div>
      </ul>
    </ul>
  )
}

class App extends React.Component{

  render(){
    return (
      <div className="container">
        <Menu />
        <Pages />
      </div>
    )
  }
}

export default App