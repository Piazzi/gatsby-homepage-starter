import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../assets/css/servicesProvided.scss"

const ServicesProvided = () => {
  return (
    <Container className="services-provided-outer-container">
      <Row>
        <h3 className="blue-text" style={{ textAlign: "left", fontSize: 29 }}>
          Services
        </h3>
      </Row>
      <Row className="services-provided-container">
        <Col md={6}>
          <Row>
            <Col className="col-2 align-center">
              <StaticImage
                src="../assets/images/check-icon.svg"
                alt="check icon"
              ></StaticImage>
            </Col>
            <Col className="col-10">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo.
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col className="col-2 align-center">
              <StaticImage
                src="../assets/images/check-icon.svg"
                alt="check icon"
              ></StaticImage>
            </Col>
            <Col className="col-10">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo.
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="services-provided-container">
        <Col md={6}>
          <Row>
            <Col className="col-2 align-center">
              <StaticImage
                src="../assets/images/check-icon.svg"
                alt="check icon"
              ></StaticImage>
            </Col>
            <Col className="col-10">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo.
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col className="col-2 align-center">
              <StaticImage
                src="../assets/images/check-icon.svg"
                alt="check icon"
              ></StaticImage>
            </Col>
            <Col className="col-10">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo.
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="services-provided-container">
        <Col md={6}>
          <Row>
            <Col className="col-2 align-center">
              <StaticImage
                src="../assets/images/check-icon.svg"
                alt="check icon"
              ></StaticImage>
            </Col>
            <Col className="col-10">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo.
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
            <Col className="col-2 align-center">
              <StaticImage
                src="../assets/images/check-icon.svg"
                alt="check icon"
              ></StaticImage>
            </Col>
            <Col className="col-10">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ServicesProvided
