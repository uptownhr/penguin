import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'

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

const Penguin = function(){

  return (
    <div
      data-anchor="Penguin"
      key="Penguin"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background1 + ')'}}>
      <div class="site-container">
        <img class="site-logo" src={stiqr} alt="show me picture"></img>
        <h2>Penguin</h2>
        <p>This is antartica</p>
      </div>
    </div>
  )
}

const Stiqr = function(){

  return (
    <div
      data-anchor="Stiqr"
      key="Stiqr"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background1 + ')'}}>
      <div class="site-container">
        <img class="site-logo" src={stiqr} alt="show me picture"></img>
        <h2>Stiqr</h2>
        <p>Just stiq it!</p>
      </div>
    </div>
  )
}

const Startuptabs = function(){

  return (
    <div
      data-anchor="Startuptabs"
      key="Startuptabs"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background2 + ')'}}>
      <div class="site-container">
        <img class="site-logo" src={startupTabs} alt="show me picture"></img>
        <h2>Startuptabs</h2>
        <p>Get the word out about your new Start Up!</p>
      </div>
    </div>
  )
}

const Amplfy = function(){
  
  return (
    <div
      data-anchor="Amplfy"
      key="Amplfy"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background2 + ')'}}>
      <div class="site-container">
        <img class="site-logo" src={amplfy} alt="show me picture"></img>
        <h2>Amplfy</h2>
        <p>Just another Social Network Platform</p>
      </div>
    </div>
  )
}

const Honeybadger = function(){
  
  return (
    <div
      data-anchor="Honeybadger"
      key="Honeybadger"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background3 + ')'}}>
      <div class="site-container">
        <img class="site-logo" src={honeybadger} alt="show me picture"></img>
        <h2>Honeybadger</h2>
        <p>Penguins can fly, in the ocean</p>
      </div>
    </div>
  )
}

const Hackable = function(){

  return (
    <div
      data-anchor="Hackable"
      key="Hackable"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background4 + ')'}}>
      <div class="site-container">
        <img class="site-logo" src={hackable} alt="show me picture"></img>
        <h2>Hackable</h2>
        <p>I like big butts and I cannot lie</p>
      </div>
    </div>
  )
}

class About extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      active_profile: {
        name: 'james',
        title: 'ceo',
        description: 'blah blah blah'
      },
      profiles: [
        {
          name: 'james',
          title: 'ceo',
          description: 'blah blah blah'
        },
        {
          name: 'dennis',
          title: 'dev',
          description: 'har har har'
        },
        {
          name: 'cat',
          title: 'madre',
          description: 'huh?'
        }
      ]
    }
  }

  changeProfile(profile){
    this.setState({
      active_profile: profile
    })
  }

  profile(profile){
    return (
      <div>
        {profile.name}
        {profile.title}
        {profile.description}
      </div>

    )
  }

  render(){
    return (
      <div
        data-anchor="About"
        key="About"
        className="section"
        style={{backgroundSize: 'cover', backgroundImage: 'url(' + background5 + ')'}}>
        <div class="site-container">
          <h2>About</h2>
          <p>Meet the team</p>
          <ul>
            {this.state.profiles.map( profile => (
              <li onClick={this.changeProfile.bind(this, profile)}>{profile.name}</li>
            ))}
          </ul>

          {this.profile(this.state.active_profile)}
        </div>
      </div>
    )
  }
}


const Contact = function(){
  return (
    <div
      data-anchor="Contact"
      key="Contact"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background5 + ')'}}>
      <div class="site-container">
        <h2>Contact</h2>
        <p>Please contact us</p>
      </div>
    </div>
  )
}

class Pages extends React.Component {
  
  componentDidMount(){
    $(this.refs.fullpage).fullpage({
      menu: '#menu'
    })
  }
  
  render() {
    return (
      <div ref="fullpage">
        <Penguin />
        <Stiqr />
        <Startuptabs />
        <Amplfy />
        <Honeybadger />
        <Hackable />
        <About />
        <Contact />
      </div>
    )
  }
}

export default Pages