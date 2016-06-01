import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'

import './main.css'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background4.svg'
import background5 from './background.svg'

import amplfy from '../resources/amplfy.png'
import penguin from '../resources/logo-white.png'
import stiqr from '../resources/stiqr.png'
import hackable from '../resources/hackable.png'
import honeybadger from '../resources/honeyBadger.png'
import startupTabs from '../resources/startupTabs.png'
import darkBoy from '../resources/darkBoy.png'
import grizzly from '../resources/grizzly.png'

const MenuSection = function(props){
  let head = props.header;
  let items = props.items.map(item => {
    if (head != 'ABOUT' && head != 'CONTACT') {
      return (<li key={item.name}>
        <div className="sub-menu"><a href={`#${item.name}`}>{item.name}</a></div>
      </li> )
    } else {
      return null;
    }
  })

  //link to main if available, if not link to first item
  let key = ''
  
  if (props.main) {
    key = props.main.name
  } else if (props.items.length) {
    key = props.items[0].name
  }
  
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
      <h2> {item.name} </h2>
      <p> {item.content} </p>
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
        main : '',
        items:[{
          background: background1,
          logo: penguin,
          name: 'Penguin',
          tag: 'Penguin Interactive Unit',
          content: 'Fly like an Eagle, but Swim like a Penguin'
        }]
      },
      {
        header: 'Startups',
        main : '',
        items: [{
            background: background1,
            logo: stiqr,
            name: 'Stiqr',
            tag: 'Stiq it to the MAN!',
            content: "Just stiq it!",
            url: "http://www.stiqr.com/"
          }, {
          background: background2,
          logo: startupTabs,
          name: 'Startuptabs',
          tag: 'Listing for Startups',
          content: "Get the word out about your new Start Up!",
          url: 'http://www.startuptabs.com/'
        }, {
          background: background2,
          logo: amplfy,
          name: 'Amplfy',
          tag: 'Amplfy Your Online Presence',
          content: "Just another Social Network Platform",
          url: 'https://www.amplfy.me/'
        }]
      },
      {
        header: 'Opensource',
        main : '',
        items: [{
          background: background3,
          logo: honeybadger,
          name: 'Honeybadger',
          content: "Penguins can fly, in the ocean",
        }, {
          background: background4,
          logo: hackable,
          name: 'Hackable',
          content: "I like big butts and I cannot lie",
        }]
      },
      {
        header: 'About Us',
        main : {
          background: background5,
          logo: penguin,
          name: 'fifth',
          content: "Remember, remember the fifth of november",
        },
        items: []
      },
      {
        header: 'Contact Us',
        main : {
          background: background5,
          logo: grizzly,
          name: 'Contact',
          content: "Remember, remember the fifth of november",
        },
        items: []
      }
    ]

    return (
      <div>
        <ul id="menu">
          <h1>Penguin</h1>
            <br>
              </br>
            {sections.map( (section,index) => <MenuSection key={index} {...section} />) }
          <br>
            </br>
        </ul>
        <div ref="fullpage">
          {sections.map( section => {
            let items = [];
            
            if (section.main) {
              items.push(<Item item={section.main} />)
            }
            if (section.items.length){
              items.push(section.items.map( item => <Item item={item} />))
            }
            
            return items
          })}
        </div>
      </div>
    )
  }
}

export default App