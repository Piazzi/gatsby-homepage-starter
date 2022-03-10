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
              Remove all construction <br /> debris
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
              Dust removal from ceiling <br />
              pipes, duct work, vents, light <br />
              fixtures, etc.
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
              Tain removal, scrubbing, <br /> dusting and vacuuming of all{" "}
              <br /> surfaces including trim work <br /> and office furniture.
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
              Full sanitizing of kitchens and <br />
              bathrooms to make them ready <br />
              for your use.
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
              Scrub floors and tiles polish <br /> stainless steel, wipe walls{" "}
              <br /> and more.
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
              Cleaning window sills and <br />
              frames, window and glass <br /> cleaning including scraping and{" "}
              <br />
              etching removal.
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ServicesProvided
