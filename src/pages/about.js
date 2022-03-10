import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Gallery from "../components/Gallery"
import ContactForm from "../components/ContactForm"
import Seo from "../components/SEO"

const About = () => {
  return (
    <Layout>
      <Seo title="About Us" />
      <Container className="p-container">
        <h1 className="blue-text p-title">About Us </h1>
        <Row style={{ marginBottom: "100px" }}>
          <Col md={6}>
            <p className="mt-4">
              Aenean pellentesque odio libero, quis laoreet ligula hendrerit eu. Sed vel lorem interdum, laoreet justo vel, aliquet nibh. Sed at bibendum sapien
              <br />
              <br />
              Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at faucibus nibh. Ut ligula ex, tempus ac tempor a, dapibus ac ipsum. Cras eget pretium sapien.
              <br />
              <br />
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor justo. Donec mattis ante eu ante mollis porta. Proin in felis scelerisque, consequat mauris ut, dignissim sem
            </p>
          </Col>
          <Col
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            md={6}
            className="align-center"
            style={{ marginTop: "-5%" }}
          >
            <StaticImage
              className="worker-image"
              src="../assets/images/Aboutus_Illustration.png"
              alt="workers"
            ></StaticImage>
          </Col>
        </Row>
      </Container>
      <Gallery></Gallery>
      <Container fluid id="our-team-container">
        <Container>
          <Row>
            <Col style={{ alignSelf: "center" }} md={6}>
              <div className="worker-image">
                <StaticImage
                  src="../assets/images/workers.jpg"
                  alt="worker"
                  className="rounded"
                ></StaticImage>
              </div>
            </Col>
            <Col
              style={{ alignSelf: "center" }}
              xs={{ order: "first" }}
              lg={{ order: "last" }}
            >
              <h2 className="blue-text p-title">Our Team </h2>
              <p>
                Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor justo. Donec mattis ante eu ante mollis porta. Proin in felis scelerisque, consequat mauris ut, dignissim sem
                <br />
                <br />
                Aenean aliquet arcu id convallis volutpat. Nulla et varius ipsum, at faucibus nibh. Ut ligula ex, tempus ac tempor a, dapibus ac ipsum. Cras eget pretium sapien.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <ContactForm title="GET IN TOUCH!"></ContactForm>
    </Layout>
  )
}

export default About
