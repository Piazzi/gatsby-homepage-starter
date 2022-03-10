import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/footer.scss"

const Footer = () => {
  return (
    <div className="outer-footer">
      <Container className="footer">
        <footer>
          <Row>
            <Col sm={12} md={4} className="justify-content-center ">
              <Row className="margin-top">
                <Col xs="auto" md="auto">
                  <StaticImage
                    className="icon"
                    src="../assets/images/map-marker-icon.svg"
                    alt="icon"
                  ></StaticImage>
                </Col>
                <Col>
                  <span>
                    701 West Georgia street Unit 1500, <br />
                    Vancouver, BC V7Y 1C6
                  </span>
                </Col>
              </Row>
              <br />
              <a href="https://www.facebook.com/BOSSConstructionCleaing/">
              <StaticImage
                className="icon fb-icon"
                src="../assets/images/fb-icon.svg"
                alt="icon"
                ></StaticImage>
                </a>
                <a href="https://www.instagram.com/bossconstructioncleaning/">
              <StaticImage
                className="icon ig-icon"
                src="../assets/images/ig-icon.svg"
                alt="icon"
                ></StaticImage>
                </a>
              <div className="wpp-container" style={{ marginTop: "-1%" }}>
                <StaticImage
                  className="icon "
                  src="../assets/images/wpp-icon.svg"
                  alt="icon"
                  style={{ verticalAlign: "middle" }}
                ></StaticImage>
                <span>+1 778-899-2006</span>
                <br />
              </div>
            </Col>
            <Col md={4} className="">
              <Row className="margin-top">
                <Col xs={12} md={6}>
                  <Link to="/about" className="footer-nav">
                    ABOUT US
                  </Link>
                  <Link to="/blog" className="footer-nav">
                    BLOG
                  </Link>
                  <Link to="/contact" className="footer-nav">
                    CONTACT
                  </Link>
                </Col>
                <Col xs={12} md={6} className="">
                  <Link to="/about" className="footer-nav ">
                    SERVICES
                  </Link>
                  <Link
                    to="/services/construction-cleaning"
                    className="footer-nav service-link service-dropdown-link"
                  >
                    Post-Construction
                  </Link>
                  <Link
                    to="/services/janitorial"
                    className="footer-nav service-link service-dropdown-link"
                  >
                    Janitorial
                  </Link>
                  <Link
                    to="/services/commercial"
                    className="footer-nav service-link service-dropdown-link"
                  >
                    Commercial
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4} className="">
              <Row className="margin-top">
                <Col xs="auto" md="auto">
                  <StaticImage
                    src="../assets/images/Clock.svg"
                    alt="icon"
                  ></StaticImage>
                </Col>
                <Col>
                  <span>
                    <strong> HOURS OF OPERATION </strong>
                  </span>
                  <br />
                  <span>Mon - Fri / 8:00 am - 6:00 pm </span>
                  <br />
                  <span>Saturday / 10:00 am - 5:00 pm </span>
                  <br />
                  <span>Sunday / 10:00 am - 3:00 pm </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </footer>
      </Container>
    </div>
  )
}

export default Footer
