import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/' exact activeStyle>
            Quiz
          </NavLink>
          <NavLink to='/about' exact activeStyle>
            Is Triangle?
          </NavLink>
          <NavLink to='/hypotenuse' exact activeStyle>
            Hypotenuse
          </NavLink>
          <NavLink to='/team' exact activeStyle>
            Area of Triangle
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
