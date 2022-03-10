import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ContactForm from "../../components/ContactForm"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"

export default function Janitorial() {
  return (
    <Layout>
      <Seo title="Janitorial" />
      <Container className="margin-top">
        <h1 className="p-title blue-text">SERVICE 2</h1>
        <Row>
          <Col md={6}>
            <p className="mt-4">
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo. Donec mattis ante eu ante mollis porta. Proin in felis
              scelerisque, consequat mauris ut, dignissim sem
              <br /> <br />
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo. Donec mattis ante eu ante mollis porta. Proin in felis
              scelerisque, consequat mauris ut, dignissim sem
              <br /> <br />
              Curabitur hendrerit quam sed justo luctus porta. Sed egestas dolor
              justo. Donec mattis ante eu ante mollis porta. Proin in felis
              scelerisque, consequat mauris ut, dignissim sem
              <br />
            </p>
          </Col>
          <Col
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            md={6}
            className="align-center worker-image"
          >
            <StaticImage
              src="../../assets/images/worker2.png"
              alt="worker"
            ></StaticImage>
          </Col>
        </Row>
        <Row className="container-margin">
          <Col className="align-center">
            <StaticImage
              className="rounded"
              src="../../assets/images/janitorial-image.jpg"
              alt="janitorial"
              width={833}
              height={500}
            ></StaticImage>
          </Col>
        </Row>
      </Container>
      <ContactForm title="GET IN TOUCH!"></ContactForm>
    </Layout>
  )
}
