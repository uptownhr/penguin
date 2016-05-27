import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'

import './main.css'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background4.svg'
import background5 from './background.svg'
import penguin from '../resources/logo-white.png'
import redButt from '../resources/redButt.jpg'
import wannaFanta from '../resources/wannaFanta.png'

class App extends React.Component{


  componentDidMount(){
    $(this.refs.fullpage).fullpage({
      menu: '#menu'
    })
  }

  render(){
    const sections = this.sections = [
      {
        header: 'Marketplace',
        items: [{
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
          }]
      },
      {
        header: 'Media',
        items: [{
          background: background3,
          logo: penguin,
          name: 'third',
          content: "Penguins can fly, in the ocean",
          type: 'media'
        }, {
          background: background4,
          logo: redButt,
          name: 'fourth',
          content: "I like big butts and I cannot lie",
          type: 'media'
        }]
      },
      {
        header: 'Last',
        items: [{
          background: background5,
          logo: penguin,
          name: 'fifth',
          content: "Remember, remember the fifth of november",
          type: 'media'
        }]
      }
    ]

    return (
      <div>
        <ul id="menu">
          <h1>Penguin</h1>
            <br>
              </br>
            {sections.map( section => {
              
              let items = section.items.map(item => {
                return ( <li key={item.name}><a href={`#${item.name}`}>{item.name}</a></li> )
              })
              
              return (
                <ul id="sub-menu"><div class="sub-menu">{section.header}</div>
                  {items}
                </ul>
              ) 
            })}
        </ul>
        <div ref="fullpage">
          {sections.map( section => {
            
            return (section.items.map( item => (
              <div data-anchor={item.name} key={item.name} className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + item.background + ')'}}>
                <div class="site-container">
                  <img class="site-logo" src={item.logo} alt="show me picture"></img>
                  <h2>tag line: {item.name}</h2>
                  <p>content: {item.content}</p>
                </div>
              </div>
            )))
            
          })}
        </div>
      </div>
    )
  }
}

export default App