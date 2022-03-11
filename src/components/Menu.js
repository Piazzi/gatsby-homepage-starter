import React from "react"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Col, Container, Row } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"
import "../assets/css/menu.scss"

const Menu = () => {
  return (
    <>
      <Navbar sticky="top" className="main-menu" collapseOnSelect expand="lg">
        <Container id="menu-outer-container">
          <Link to="/">
            <StaticImage
              id="logo"
              src="../assets/images/logo.png"
              alt="logo"
             
            ></StaticImage>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ margin: "auto" }}>
              <Link to="/" className="main-menu-link" activeClassName="active">
                HOME
              </Link>
              <Link
                to="/about"
                className="main-menu-link"
                activeClassName="active"
              >
                ABOUT US
              </Link>
              <NavDropdown
                className="main-menu-link"
                title={
                  <div>
                    SERVICES
                    <StaticImage
                      style={{ verticalAlign: "middle", left: "10px" }}
                      src="../assets/images/arrow-down.svg"
                      alt="dropdown-icon"
                      width={15}
                      height={9}
                    ></StaticImage>
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <Link
                  to="/services/construction-cleaning"
                  className="main-menu-link dropdown-link"
                  activeClassName="active"
                >
                  Service 1
                </Link>
                <Link
                  to="/services/janitorial"
                  className="main-menu-link  dropdown-link"
                  activeClassName="active"
                >
                  Service 2
                </Link>
                <Link
                  to="/services/commercial"
                  className="main-menu-link  dropdown-link"
                  activeClassName="active"
                >
                  Service 3
                </Link>
              </NavDropdown>
              <Link
                to="/blog"
                className="main-menu-link"
                activeClassName="active"
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="main-menu-link"
                activeClassName="active"
              >
                CONTACT
              </Link>

              <Row className="social-links">
                <Col className="col-auto mt-1  align-center">
                  <a href="/contact" className="main-menu-link">
                    <div id="wpp-navbar" className="wpp-container">
                      <StaticImage
                        className="wpp-icon"
                        src="../assets/images/wpp-icon.svg"
                        alt="wpp-icon"
                      ></StaticImage>
                      +1 111-111-1111
                    </div>
                  </a>
                </Col>
                <Col className="col-auto mt-1 align-center">
                  <a
                    id="fb-navbar"
                    href=""
                    className="main-menu-link"
                  >
                    <StaticImage
                      className="fb-icon"
                      src="../assets/images/fb-icon.svg"
                      alt="wpp-icon"
                    ></StaticImage>
                  </a>
                </Col>

                <Col className="col-auto mt-1  align-center">
                  <a
                    id="ig-navbar"
                    href=""
                    className="main-menu-link"
                  >
                    <StaticImage
                      className="ig-icon"
                      src="../assets/images/ig-icon.svg"
                      alt="wpp-icon"
                    ></StaticImage>
                  </a>
                </Col>
                <Col className="col-auto d-block d-lg-none">
                  <StaticImage
                    className="main-menu-link "
                    id="mobile-logo"
                    src="../assets/images/logo.svg"
                    alt="logo"
                  ></StaticImage>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Menu
