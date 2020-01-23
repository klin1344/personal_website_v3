import React from 'react'
import resume from '../assets/Resume_Kevin_Lin.pdf'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a target="_blank" href={resume} className="icon fa-file-text-o">
                <span className="label">Resume</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/klin1344"
                className="icon fa-linkedin-square"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/klin1344"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                href="mailto:kyl3@rice.edu"
                className="icon fa-envelope-o"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <br />
          <ul className="copyright">
            <li>
              &copy; {new Date().getFullYear()} Kevin Lin. Built with React.
            </li>
            <li>
              <a
                target="_blank"
                href="https://klin1344.github.io/personal_site_v2"
              >
                <span>Old Website</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
