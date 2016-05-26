import React from 'react'
import $ from 'jquery'
import fullpage from 'fullpage.js'
import './main.css'
import background from './background.svg'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      text: 'asdf'
    }
  }

  componentDidMount(){
    $(this.refs.fullpage).fullpage()
    setTimeout( function(){
      this.setState({
        text: 'tumadre'
      })
    }.bind(this), 1000)
  }

  render(){
    return (
      <div ref="fullpage">
        <div className="section" style={{backgroundSize: 'cover', backgroundImage: 'url(' + background + ')'}}>{this.state.text}</div>
        <div className="section">Some section</div>
        <div className="section">Some section</div>
        <div className="section">Some section</div>
      </div>
    )
  }
}

export default App