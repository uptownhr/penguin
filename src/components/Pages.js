import React from 'react'

import background1 from './background1.svg'
import background2 from './background2.svg'
import background3 from './background3.svg'
import background4 from './background4.svg'
import background5 from './background.svg'
import startuptabsbg from './background1.svg'

import mocat from '../resources/mocat.jpg'
import james from '../resources/james.jpg'
import dennis from '../resources/dennis.jpg'
import vik from '../resources/vik.jpg'
import stewie from '../resources/Stewiepolice.png'

import amplfy from '../resources/amplfy.png'
import penguin from '../resources/logo-white.png'
import stiqr from '../resources/stiqr.png'
import hackable from '../resources/hackable.png'
import honeybadger from '../resources/honeyBadger.png'

import startupTabs from '../resources/startuptabs_w.png'
import darkBoy from '../resources/darkBoy.png'
import grizzly from '../resources/grizzly.png'



const Penguin = function(){

  return (
    <div
      data-anchor="Penguin"
      key="Penguin"
      className="section"
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background1 + ')'}}>
      <div className="site-container" style={{marginBottom: '120px'}}>
        <img className="site-logo" src={penguin} alt="show me picture"></img>
        <h2 style={{fontSize: '6rem'}}>PENGUIN WEB</h2>
        <p>RAPID PROTOTYPING SERVICES FOR STARTUPS.</p>
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
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + background3 + ')'}}>
      <div className="site-container">
        <img className="site-logo" src={stiqr} alt="show me picture"></img>
        <h2>No Code. Just Stick It!</h2>
        <p>Design your website just as you do with Photoshop, directly from your website, live.</p>
        <a href="http://www.stiqr.com" className="button">Visit <i className="fa fa-lg fa-angle-right" aria-hidden="true"></i></a>

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
      style={{backgroundSize: 'cover', backgroundImage: 'url(' + startuptabsbg + ')'}}>
      <div className="site-container">
        <img className="site-logo" src={startupTabs} alt="show me picture"></img>
        <h2>Startup Discovery Engine</h2>
        <p>Startuptabs helps you discover your startup! Fresh and exciting startups with every new tab.</p>
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
      <div className="site-container">
        <img className="site-logo" src={amplfy} alt="show me picture"></img>
        <h2>Amplify your message</h2>
        <p>Amplify your social reach through supporters. Syndicates retweet what you post through Amplfy. #itslouder™</p>
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
      <div className="site-container">
        <img className="site-logo" src={honeybadger} alt="show me picture"></img>
        <h2>Honeybadger</h2>
        <p>A hackathon starter built for simplicity</p>
        <a href="https://github.com/jaequery/honeybadger" className="button">Github <i className="fa fa-lg fa-angle-right" aria-hidden="true"></i></a>
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
      <div className="site-container">
        <img className="site-logo" src={hackable} alt="show me picture"></img>
        <h2>Personal site starter for NodeJS developers</h2>
        <p>Hackable comes pre-built with an admin that is easy to hack with your nodejs chops. Hackable keeps things familiar and uses libraries common to expressjs or koajs. No new API's to learn - no magic.</p>
        <a className="button" href="http://github.com/uptownhr/hackable">Github <i className="fa fa-lg fa-angle-right" aria-hidden="true"></i></a>
      </div>
    </div>
  )
}

class About extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      active_profile: {
        name: 'JAMES',
        photo: james,
        title: 'ceo',
        description: 'James employs Lee near her economy. James rockets. James edits Lee beside an' +
        ' inhabitant. The prayer pants above the idiotic husband. Lee mutters across the calculated ' +
        'trend. Lee skips James underneath the several gender.'
      },
      profiles: [
        {
          name: 'JAMES',
          photo: james,
          title: 'CEO',
          description: 'James employs Lee near her economy. James rockets. James edits Lee beside an' +
          ' inhabitant. The prayer pants above the idiotic husband. Lee mutters across the calculated ' +
          'trend. Lee skips James underneath the several gender.'
        },
        {
          name: 'DENNIS',
          photo: dennis,
          title: 'JS DEV',
          description: 'The interim freeway worships davis. Dennis balances this discouraging' +
          ' gulf. Under the ritual yawns the ash. Dennis compacts davis.'
        },
        {
          name: 'CAT',
          photo: mocat,
          title: 'PHP DEV',
          description: 'Cat pinches vik beside the happier cousin. Without a book breaks cat.' +
          ' Why can\'t cat replace its sexist? Cat faints below a worthwhile pedant.?'
        },
        {
          name: 'VIK',
          photo: vik,
          title: 'PROFESSOR of JS/CSS/HTML',
          description: 'vik pushes his car to go to the bernie sander\'s rally in Anaheim.' +
            ' Cuz love is such an old fashion word and love dares you to care for the people' +
            ' on the edge of the night and love dares you to change our ways of caring about' +
            ' ourselves.'
        },
        {
          name: 'STEWIE',
          photo: stewie,
          title: 'World Conquoror',
          description: 'She packed my bags, last night, pre flight... 9 am... and i\'m gonna be' +
            ' as high as a kite by then.'
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
      <div id="bio-shot" className="bio-shots-details">
        <div id="bio-image">
          <div className="col-1-5"><img src={profile.photo} alt="image of cat"></img></div>
          <div className="bio-content col-6">
              <h1>{profile.name}</h1>
              <h2>{profile.title}</h2>
              <p>{profile.description}</p>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div
        data-anchor="About"
        key="About"
        className="section"
        style={{backgroundSize: 'cover', backgroundImage: `url('${background1}')`}}>
        <div className="grid-container" style={{marginBottom: '120px'}}>

            <div className="row" style={{borderBottomWidth: '1px'}}>
            {this.state.profiles.map( (profile, index) => (
              <div key={index} className="col-1-5">
                <div className="bio-shot" onClick={this.changeProfile.bind(this, profile)}>
                  <img className="bio-photo" src={profile.photo} alt="picture of a cat"></img>
                  <br></br>

                  <br></br>
                  <p>{profile.name}</p>
                  <br></br>
                  <p>{profile.title}</p>

                </div>
              </div>
            ))}
            </div>


          <div className="row">
            {this.profile(this.state.active_profile)}
          </div>
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
      style={{backgroundSize: 'cover'}}>
      <div className="typeform">
        <iframe frameBorder="0" id="typeform-full" width="100%" height="100%" src="https://startuptabs.typeform.com/to/Ls52J1"></iframe>
      </div>

    </div>
  )
}

class Pages extends React.Component {
  
  componentDidMount(){
    let $ = require('jquery')
    let fullpage = require('fullpage.js')
    $(this.refs.fullpage).fullpage({
      menu: '#menu',
      afterLoad: function(link, index){
        $('#menu a').removeClass('active')
        $('#menu').removeClass('contact')

        if(index == 1) return false

        var menuItems = $('#menu .sub-menu li a')
        var menuItem = menuItems[index-2]
        $(menuItem).addClass('active')

        if(link == 'Contact'){
          $('#menu').addClass('contact')
          $('[href="#Contact"]').addClass('active')
        }

        if(link == 'About'){
          $('[href="#About"]').addClass('active')
        }

      }
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