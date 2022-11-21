import React from 'react'

import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
  return (
    <>
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand className='mx-5'> TextUtils</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    {/* <LinkContainer to='home' > */}
                      <Nav.Link> Home</Nav.Link>
                    {/* </LinkContainer> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default NavBar