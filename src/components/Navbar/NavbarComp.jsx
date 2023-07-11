import React from 'react'
import { Navbar,Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

function NavbarComp() {

  return (
    <>
    <Navbar
      fluid
      rounded
      className='bg-blue-100'
    >
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          KULINERAN
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='mr-4'>
          Login
        </Button>
        <Button>
          Register
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
        >
           <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-600' : ''}>
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink to='/daftar-menu' className={({isActive}) => isActive ? 'text-blue-600' : ''}>
              Daftar Menu
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default NavbarComp
