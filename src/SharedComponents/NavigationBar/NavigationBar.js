import React from "react";
import websitelogo from "../../images/logo.png";
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
              Home
            </NavLink>

            <NavLink to="/explore" className="nav-link hover-underline text-white">
              Explore
            </NavLink>

            <NavLink to="/dashboard" className="nav-link hover-underline text-white">
              Dashboard
            </NavLink>

            <NavLink to="/about" className="nav-link hover-underline text-white">
              About
            </NavLink>
          </Nav>
          <Nav>
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
