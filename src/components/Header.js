import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Hi. I'm Kevin Lin.</strong>
            <br />
            <div>
              Software Engineer @{' '}
              <a target="_blank" href="https://www.tableau.com/">
                Tableau
              </a>
            </div>
            <br />
            <div>
              <a target="_blank" href="https://www.cc.gatech.edu/">
                Georgia Tech M.S. CS
              </a>
              <br />
              <a target="_blank" href="https://csweb.rice.edu/">
                Rice University B.S. CS
              </a>
            </div>
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
