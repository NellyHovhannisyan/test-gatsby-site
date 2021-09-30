import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { NavbarDiv } from './style'

const Navbar = () => {
  return (
    <NavbarDiv>
      <div className='logo'>
      <StaticImage src="../images/icon.png" alt="A kitten"  />
      </div>
      <nav>
        <ul>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/industries">Industries</Link></li>
          <li><Link to="/tecnologies">Tecnologies</Link></li>
          <li><Link to="/caseStudies">Case Studies</Link></li>
        </ul>
      </nav>
    </NavbarDiv>
  )
}

export default Navbar