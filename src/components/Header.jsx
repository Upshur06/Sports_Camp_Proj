import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
          <div>Home</div>
          <div>About</div>
          <div>Mission</div>
          <div>Programs</div>
          <div>Events</div>
          <div>Contact</div>
      </div>
    )
  }
}

export default Header