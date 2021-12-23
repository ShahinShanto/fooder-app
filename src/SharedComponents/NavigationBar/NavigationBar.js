import React from "react";
import websitelogo from "../../images/logo-01.png";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import defaultImage from "../../images/defaultUser.png";
import './NavigationBar.css';

const NavigationBar = () => {
  const { user, logOut } = UseAuth();
  return (

    <Navbar sticky="top" bg="dark" className="navbar-dark" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <NavLink to="/">
            <img
              src={websitelogo}
              width="100%"
              height="40px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/home" className="nav-link hover-underline text-white">
              HOME
            </NavLink>

            <NavLink to="/explore" className="nav-link hover-underline text-white">
              CATEGORIES
            </NavLink>
            <NavLink to="/menu" className="nav-link hover-underline text-white">
              MENU
            </NavLink>

            <NavLink to="/dashboard" className="nav-link hover-underline text-white">
              DASHBOARD
            </NavLink>

            <NavLink to="/about" className="nav-link hover-underline text-white">
              ABOUT US
            </NavLink>
          </Nav>
          <Nav>
            <form class="d-flex px-lg-4">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
            {user.email ? (
              <Nav className="d-flex align-items-center">
                <Navbar.Text className="text-center">
                  {user?.photoURL ? (
                    <Image
                      className="mx-1"
                      style={{ width: "35px" }}
                      src={user?.photoURL}
                      roundedCircle
                    />
                  ) : (
                    <Image
                      className="mx-1"
                      style={{ width: "35px" }}
                      src={defaultImage}
                      roundedCircle
                    />
                  )}

                  <span className="fw-bold">{user.displayName}</span>
                </Navbar.Text>
                <NavLink to="/login" className="px-2">
                  <button
                    onClick={logOut}
                    className="btn btn-danger fw-bold"
                  >
                    Log Out
                  </button>
                </NavLink>
              </Nav>
            ) : (
              <Nav>
                <NavLink to="/login" className="nav-link hover-underline text-white">
                  Login
                </NavLink>

                <NavLink to="/registration" className="nav-link hover-underline text-white">
                  Registration
                </NavLink>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
