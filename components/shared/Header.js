import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';


const BsNavLink = props => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}


const LoginLink = () => <BsNavLink href="/api/auth/login" title="Login" />

const LogoutLink = () => <BsNavLink href="/api/auth/logout" title="Logout" />


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <div className="navbar-brand">
          <Link href="/">
            <a className="port-navbar-brand">Yosael Gutierrez</a>
          </Link>
          </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/profile" title="Profile"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv"/>
            </NavItem>
          </Nav>
          <Nav navbar className="margin-inline-end">
            <NavItem className="port-navbar-item">
              <LoginLink />
            </NavItem>
            <NavItem className="port-navbar-item">
              <LogoutLink />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;