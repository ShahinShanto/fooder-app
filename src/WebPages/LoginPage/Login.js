import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import UseFirebase from "../../Hooks/UseFirebase";
import Footer from "../../SharedComponents/Footer/Footer";
import NavigationBar from "../../SharedComponents/NavigationBar/NavigationBar";
import "./Login.css";

const Login = () => {
  UseFirebase();
  const {
    handleGoogleSignIn,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    loading,
    error,
  } = UseAuth();

  return (
    <>
      <NavigationBar></NavigationBar>
      {loading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <div className="container width bg-dark border-shadow mt-5 text-white">
          <div className="p-5">
            <div className="text-center">
              <h1 className=" text-bold mb-4 text-white">Sign in to Your Account</h1>
              <div className="authentication-icon my-3 bg-white rounded-pill">
                <i
                  onClick={handleGoogleSignIn}
                  className="fab fa-google-plus-g p-3 text-danger"
                ></i>

                <i className="fab fa-facebook-square p-3 text-primary"></i>

                <i className="fab fa-linkedin p-3 text-info"></i>
              </div>
              <p>or use email for login</p>
            </div>

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email address:</Form.Label>
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="fw-bold">Password:</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me?" />
              </Form.Group>

              <p className="text-danger">{error}</p>

              <Button
                variant="danger"
                className="px-5 py-2 fw-bold"
                type="submit"
              >
                Login
              </Button>
              <p className="text-center text-danger pt-3 m-0 fw-bold ">
                Don't have an account?
                <Link to="/registration" className="text-white ms-2">
                  register
                </Link>
              </p>
            </Form>
          </div>
        </div>
      )}
      <Footer></Footer>
    </>
  );
};

export default Login;
