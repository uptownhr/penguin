import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'

import './main.css'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background.svg'

class App extends React.Component{
  constructor(){
    super()
    this.sections = [{
      background: background1,
      name: 'first'
    }, {
      background: background2,
      name: 'second'
    }, {
      background: background3,
      name: 'third'
    }, {
      background: background4,
      name: 'fourth'
    }]
  }

  componentDidMount(){
    $(this.refs.fullpage).fullpage({
      menu: '#menu'
    })
  }

  render(){
    const sections = this.sections

    return (
      <div>
        <ul id="menu">
          {sections.map( section => (
            <li key={section.name}><a href={`#${section.name}`}>{section.name}</a></li>
          ))}
        </ul>
        <div ref="fullpage">
          {sections.map( section => (
            <div data-anchor={section.name} key={section.name} className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + section.background + ')'}}>{section.name}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default App