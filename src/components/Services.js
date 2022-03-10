import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/services.scss"

const Services = () => {
  return (
    <Container fluid id="services-container">
      <Container>
        <Row>
          <Col md={6}>
            <div className="worker-image">
              <StaticImage
                src="../assets/images/worker.png"
                alt="worker"
                height={538}
                width={262}
              ></StaticImage>
            </div>
          </Col>
          <Col className="align-center">
            <h2 className="orange-text">
              We offer a range of eco-friendly
              <br /> high-quality cleaning services:
            </h2>
            <br />
            <div className="d-grid gap-4">
              <Button
                href="/services/construction-cleaning"
                variant="outline-primary"
              >
                Post-Construction
              </Button>
              <Button href="/services/janitorial" variant="outline-primary">
                Janitorial
              </Button>
              <Button href="/services/commercial" variant="outline-primary">
                Commercial
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Services
