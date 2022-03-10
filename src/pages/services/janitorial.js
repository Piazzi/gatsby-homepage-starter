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
        <h1 className="p-title blue-text">JANITORIAL</h1>
        <Row>
          <Col md={6}>
            <p className="mt-4">
              The service is performed with quality products ensuring that your
              facilities always look the best way. We stand out for having
              trained professionals under experienced management. <br /> <br />
              All services are customized according to the business and the
              service that is required. We carry out meticulous supervision in
              order to measure our service under the parameters of efficiency
              and effectiveness. <br /> <br />
              This cleaning can be applied for smallerscale businesses or other
              professional spaces, we offer a work team on a regular basis to
              take care of the environment of your workers. <br /> <br />
              All our staff is fully trained and supported by an experienced
              management team, they ensure that their facilities are impeccable,
              always seeking to maintain an environment of harmony for their
              workers. <br /> <br />
              Cleaning can be customized depending on the service you are
              looking to provide for your business. We seek to optimize time and
              be efficient to meet your needs, it is for them that we help you
              immediately to schedule cleaning visits, always seeking to provide
              a better service. <br /> <br />
              All cleaning is supervised in order to provide a better service
              with the standards that we represent as a company. We optimize
              times and provide efficiency.
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
