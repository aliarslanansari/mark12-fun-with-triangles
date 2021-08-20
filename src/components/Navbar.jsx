import React from 'react'
import { Nav, NavLink, NavMenu } from './NavbarElements'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Is Triangle?
          </NavLink>
          <NavLink to='/quiz' activeStyle>
            Quiz
          </NavLink>
          <NavLink to='/hypotenuse' activeStyle>
            Hypotenuse
          </NavLink>
          <NavLink to='/team' activeStyle>
            Area of Triangle
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar
