import { Col, Container, Row, Button } from "react-bootstrap"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../assets/css/servicesCards.scss"

const ServicesCards = () => {
  return (
    <Container className="service-cards-container container-margin ">
      <Row className="g-3 services-background">
        <Col md={4} className="align-center">
          <StaticImage
            src="../assets/images/bulb.svg"
            alt="bulb"
            width={66}
            height={77}
            className="service-icon"
          ></StaticImage>
          <p className="blue-text">Service 1</p>
          <p className="black-text">
            Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at
            faucibus nibh.
          </p>
        </Col>
        <Col md={4} className="align-center">
          <StaticImage
            src="../assets/images/hands.svg"
            alt="hands"
            width={88}
            height={77}
            className="service-icon"
          ></StaticImage>
          <p className="blue-text">Service 2</p>
          <p className="black-text">
            Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at
            faucibus nibh.
          </p>
        </Col>
        <Col md={4} className="align-center">
          <StaticImage
            src="../assets/images/arrows.svg"
            alt="arrows"
            width={82}
            height={74}
            className="service-icon"
          ></StaticImage>
          <p className="blue-text">Service 3</p>
          <p className="black-text">
            Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at
            faucibus nibh.
          </p>
        </Col>
      </Row>
      <Row className="align-center margin-top">
        <Col
          md={4}
          className="service-card align-left d-flex flex-column  container-margin"
        >
          <StaticImage
            src="../assets/images/commercial-home.jpg"
            alt="commercial"
            className="rounded"
            width={308}
            height={231}
          />
          <p className="blue-text card-title ">SERVICE 1</p>
          <p className="card-text ">
            Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at
            faucibus nibh. Ut ligula ex, tempus ac tempor a, dapibus ac ipsum.
            Cras eget pretium sapien, vel consequat nisl. In ac commodo nisi.
          </p>
          <div className="d-grid gap-2 mt-auto ">
            <Button href="/services/commercial" variant="secondary">
              read more
            </Button>
          </div>
        </Col>
        <Col
          md={4}
          className="service-card align-left d-flex flex-column  container-margin"
        >
          <StaticImage
            src="../assets/images/janitorial-home.jpg"
            alt="commercial"
            className="rounded"
            width={308}
            height={231}
          />
          <p className="blue-text card-title">SERVICE 2</p>
          <p className="card-text">
            Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at
            faucibus nibh. Ut ligula ex, tempus ac tempor a, dapibus ac ipsum.
            Cras eget pretium sapien, vel consequat nisl. In ac commodo nisi.
          </p>
          <div className="d-grid gap-2 mt-auto">
            <Button href="/services/janitorial" variant="secondary">
              read more
            </Button>
          </div>
        </Col>
        <Col
          md={4}
          className="service-card align-left d-flex flex-column  container-margin"
        >
          <StaticImage
            src="../assets/images/construction-cleaning-home.jpg"
            alt="commercial"
            className="rounded"
            width={308}
            height={231}
          />
          <p className="blue-text card-title">SERVICE 3</p>
          <p className="card-text">
            Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at
            faucibus nibh. Ut ligula ex, tempus ac tempor a, dapibus ac ipsum.
            Cras eget pretium sapien, vel consequat nisl. In ac commodo nisi.
          </p>
          <div className="d-grid gap-2 mt-auto ">
            <Button href="/services/construction-cleaning" variant="secondary">
              read more
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ServicesCards
