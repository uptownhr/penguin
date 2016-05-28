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

const MenuSection = function(props){
  let items = props.items.map(item => {
    return ( <li key={item.name}><a href={`#${item.name}`}>{item.name}</a></li> )
  })

  let key = props.items[0].name
  
  return (
    <ul id="sub-menu">
      <div class="sub-menu">
        <a href={`#${key}`} key={key}> 
          {props.header}
        </a>
      </div>
      {items}
    </ul>
  )
}

const Item = function(props){

  const item = props.item

  return (<div data-anchor={item.name} key={item.name} className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + item.background + ')'}}>
    <div class="site-container">
      <img class="site-logo" src={item.logo} alt="show me picture"></img>
      <h2>tag line: {item.name}</h2>
      <p>content: {item.content}</p>
    </div>
  </div>)
}

class App extends React.Component{


  componentDidMount(){
    $(this.refs.fullpage).fullpage({
      menu: '#menu'
    })
  }

  render(){
    const sections = this.sections = [
      {
        header: 'Penguin',
        items:[{
          background: background1,
          logo: penguin,
          name: 'Penguin',
          content: 'I do not know'
        }]
      },
      {
        header: 'Startups',
        items: [{
            background: background1,
            logo: penguin,
            name: 'Stiqr',
            content: "just stiq it"
          }, {
          background: background2,
          logo: redButt,
          name: 'Startuptabs',
          content: "Startup discovery engine"
        }, {
          background: background2,
          logo: redButt,
          name: 'Amplfy',
          content: "Social media amplification"
        }]
      },
      {
        header: 'Opensource',
        items: [{
          background: background3,
          logo: penguin,
          name: 'Honeybadger',
          content: "Penguins can fly, in the ocean",
          type: 'media'
        }, {
          background: background4,
          logo: redButt,
          name: 'Hackable',
          content: "I like big butts and I cannot lie",
          type: 'media'
        }]
      },
      {
        header: 'About Us',
        items: [{
          background: background5,
          logo: penguin,
          name: 'fifth',
          content: "Remember, remember the fifth of november",
          type: 'media'
        }]
      },
      {
        header: 'Contact Us',
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
            {sections.map( (section,index) => <MenuSection key={index} {...section} />) }
        </ul>
        <div ref="fullpage">
          {sections.map( section => {
            return (section.items.map( item => <Item item={item} /> ))
          })}
        </div>
      </div>
    )
  }
}

export default App