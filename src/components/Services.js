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
              Aenean pellentesque odio libero, quis laoreet ligula hendrerit eu. 
              <br /> Sed vel lorem interdum.
            </h2>
            <br />
            <div className="d-grid gap-4">
              <Button
                href="/services/construction-cleaning"
                variant="outline-primary"
              >
                Service 1
              </Button>
              <Button href="/services/janitorial" variant="outline-primary">
                Service 2
              </Button>
              <Button href="/services/commercial" variant="outline-primary">
                Service 3
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Services
