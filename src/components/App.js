import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'

import './main.css'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background4.svg'
import background5 from './background.svg'
import penguin from '../resources/penguin.png'
import redButt from '../resources/redButt.png'
import wannaFanta from '../resources/wannaFanta.png'
import darkBoy from '../resources/darkBoy.png'
import grizzly from '../resources/grizzly.png'

class App extends React.Component{


  componentDidMount(){
    $(this.refs.fullpage).fullpage({
      menu: '#menu'
    })
  }

  render(){
    const sections = this.sections = [{
      background: background1,
      logo: penguin,
      name: 'Penguin Interactive Unit',
      tag: "Penguin Interactive Development of Needlessly Large Website",
      content: "Fly like an eagle, swim like a penguin",
      type: 'media'
    }, {
      background: background2,
      logo: redButt,
      name: 'Red Neck Butts',
      tag: "Red Butt Marketing Propaganda for the Gullible",
      content: "I like big butts and I cannot lie",
      type: 'media'
    }, {
      background: background3,
      logo: wannaFanta,
      name: 'Fanta',
      tag: "Refreshing Drink for Summer Time Fun",
      content: "Wanna Fanta, don't you wanna",
      type: 'media'
    }, {
      background: background4,
      logo: darkBoy,
      name: 'Dark Boy Entertainment',
      tag: "Scaring Little Children for Pleasure",
      content: "Don't make the yetti angry, you won't like it when he gets angry",
      type: 'technology'
    }, {
      background: background5,
      name: 'Yogi Bear',
      logo: grizzly,
      tag: "I'm Smarter Than the Average Bear",
      content: "Picnic basket for all NOW!",
      type: 'technology'
    }]

    return (
      <div>
        <ul id="menu"><div><h1>Penguin.IO</h1></div>
          <ul id="sub-menu"><div class="sub-menu media-menu">MEDIA SUB-MENU</div>
            <br>
              </br>
            {sections.map( section => (
              section.type == 'media' ?
              <li key={section.name}><a href={`#${section.name}`}>{section.name}</a></li> : null
            ))}
          </ul><br>
          </br>
          <ul id="sub-menu"><div class="sub-menu technology-menu">TECHNOLOGY SUB-MENU</div>
            <br>
            </br>
            {sections.map( section => (
              section.type == 'technology' ?
                <li key={section.name}><a href={`#${section.name}`}>{section.name}</a></li> : null
            ))}
          </ul>
        </ul>
        <div ref="fullpage">
          {sections.map( section => (
            section.type == 'media' ?
            <div data-anchor={section.name} key={section.name} className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + section.background + ')'}}>
              <div class="site-container">
                <img class="site-logo" src={section.logo} alt="show me picture"></img>
                <h2>{section.tag}</h2>
                <p>{section.content}</p>
              </div>
            </div> : null
          ))}
          {sections.map( section => (
            section.type == 'technology' ?
              <div data-anchor={section.name} key={section.name} className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + section.background + ')'}}>
                <div class="site-container">
                  <img class="site-logo" src={section.logo} alt="show me picture"></img>
                  <h2>{section.tag}</h2>
                  <p>{section.content}</p>
                </div>
              </div> : null
          ))}
        </div>
      </div>

    )
  }
}

export default App