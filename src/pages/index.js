import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Gallery from '../components/Gallery'

// const DEFAULT_IMAGES = [
//   {
//     id: '1',
//     source: full01,
//     thumbnail: thumb01,
//     caption: 'Photo 1',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '2',
//     source: full02,
//     thumbnail: thumb02,
//     caption: 'Photo 2',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '3',
//     source: full03,
//     thumbnail: thumb03,
//     caption: 'Photo 3',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '4',
//     source: full04,
//     thumbnail: thumb04,
//     caption: 'Photo 4',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '5',
//     source: full05,
//     thumbnail: thumb05,
//     caption: 'Photo 5',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
//   {
//     id: '6',
//     source: full06,
//     thumbnail: thumb06,
//     caption: 'Photo 6',
//     description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
//   },
// ]

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Kevin Lin'
    const siteDescription = "Kevin's personal website."

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>About Me</h2>
            </header>
            <p>
              Hi! My name is Kevin Lin. Since February 2020, I have been a
              Software Engineer based out of Seattle and working on the Tableau
              Prep team at{' '}
              <a target="_blank" href="https://www.tableau.com/">
                Tableau Software
              </a>
              . I'm interested in backend development, database systems, and computer security. I am currently pursuing a
              Master of Science in Computer Science at the <a target="_blank" href="https://www.cc.gatech.edu/">Georgia Institute of Technology</a> alongside full-time employment.
              I received a Bachelor of Science in Computer Science from <a target="_blank" href="https://cs.rice.edu/">Rice University</a> in December 2019.
            </p>
            <p>I focus on building products that bring value to customers and help them to understand their data.
              I have academic and professional experience with languages and technologies across the stack: Java, C++, C, Python, and more.</p>

            <p>If you'd like to connect, feel free to reach out via LinkedIn.</p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </section>

          {/* <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
