import React from 'react'
import Link from 'gatsby-link'

export default () =>
  <div style={{color: "tomato"}}>
    <h1>Hello World!</h1>
    <p>This is Hot Reloading!</p>
    <Link to="/my-second-gatsby-page">A link to another Gatsby Page</Link>
    <br />
    <Link to="/counter">Link to Counter</Link>
    <br />
    <img src="http://placebear.com/500/400" />
  </div>
