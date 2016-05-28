import React from 'react'
import $ from 'jquery'

import './main.css'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background4.svg'
import background5 from './background.svg'
import penguin from '../resources/penguin.png'
import redButt from '../resources/redButt.jpg'
import wannaFanta from '../resources/wannaFanta.png'

class App extends React.Component{
  componentDidMount(){
    const fullpage = require('fullpage.js')
    $(this.refs.fullpage).fullpage({
      menu: '#menu'
    })
  }

  render(){
    const sections = this.sections = [{
      background: background1,
      logo: penguin,
      name: 'first',
      content: "Penguins can fly, in the ocean",
      type: 'media'
    }, {
      background: background2,
      logo: redButt,
      name: 'second',
      content: "I like big butts and I cannot lie",
      type: 'media'
    }, {
      background: background3,
      logo: wannaFanta,
      name: 'third',
      content: "Wanna Fanta, don't you wanna",
      type: 'media'
    }, {
      background: background4,
      name: 'fourth',
      content: "Forth is the lonliest number",
      type: 'technology'
    }, {
      background: background5,
      name: 'fiftdh',
      content: "Remember, remember the fifth of november",
      type: 'technology'
    }]

    return (
      <div>
        <ul id="menu">
          <ul id="sub-menu"><div className="sub-menu">zzxd</div>
            <br>
              </br>
            {sections.map( section => (
              <li key={section.name}><a href={`#${section.name}`}>{section.name}</a></li>
            ))}
          </ul>
        </ul>
        <div ref="fullpage">
          {sections.map( section => (
            <div data-anchor={section.name} key={section.name} className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + section.background + ')'}}>
              <div className="site-container">
                <img className="site-logo" src={section.logo} alt="show me picture"></img>
                <h2>tag line: {section.name}</h2>
                <p>content: {section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default App