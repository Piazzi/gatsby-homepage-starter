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
          <h6 className="blue-text">Eco-friendly</h6>
          <p className="black-text">
            Nature is our priority and <br /> that's why we only use <br />{" "}
            eco-friendly products for <br /> all our services.
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
          <h6 className="blue-text">Professionalism</h6>
          <p className="black-text">
            Nature is our priority and <br /> that's why we only use <br />{" "}
            eco-friendly products for <br /> all our services.
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
          <h6 className="blue-text">Flexibiltity</h6>
          <p className="black-text">
            Nature is our priority and <br /> that's why we only use <br />{" "}
            eco-friendly products for <br /> all our services.
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
          <h6 className="blue-text card-title ">COMMERCIAL</h6>
          <p className="card-text ">
            Today, for most large-scale <br /> businesses, image plays a <br />
            very import- ant role, since <br />
            it is the first impression on
            <br /> their clients, that is why we
            <br /> offer services with <br />
            impeccable, professional <br />
            and elegant standards for
            <br /> our clients.
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
          <h6 className="blue-text card-title">JANITORIAL</h6>
          <p className="card-text">
            The service is performed <br />
            with quality products
            <br /> ensuring that your facilities
            <br /> always look the best way. <br />
            We stand out for having <br />
            trained professionals under
            <br /> experienced management.
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
          <h6 className="blue-text card-title">CONSTRUCTION CLEANING</h6>
          <p className="card-text">
            Today, for most large-scale
            <br /> businesses, image plays a <br />
            very import- ant role, since it <br />
            is the first impression on their <br />
            clients, that is why we offer <br />
            services with impeccable,
            <br /> professional and elegant
            <br />
            standards for our clients.
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
