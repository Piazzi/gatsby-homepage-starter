import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import ContactForm from "../../components/ContactForm"
import Layout from "../../components/Layout"
import Seo from "../../components/SEO"
import "../../assets/css/commercial.scss"

export default function Commercial() {
  return (
    <Layout>
      <Seo title="Commercial" />
      <Container>
        <Row className="margin-top">
          <h1 className="p-title blue-text">COMMERCIAL</h1>
          <p>
            Today, for most large-scale businesses, image plays a very import-
            ant role, since it is the first impression on their clients, that is
            why we offer services with impeccable, professional and elegant
            standards for our clients. Helping to maintain that momentum aspect
            which represents them, our schedules are flexible and adapt- able to
            your needs. This with the aim of not inferring in their daily
            activities. Our specialists take care of all areas involved in
            cleaning as well as the proper use of products to keep the
            facilities intact. This service is quite adaptable for all indus-
            tries regardless of the line of business.
          </p>
        </Row>

        <Row className="margin-top">
          <Col
            md={{ span: 4, offset: 2 }}
            className=" commercial-text align-center"
          >
            <h3 className="orange-text  align-left">
              Floor and Carpet <br />
              Cleaning
            </h3>
          </Col>
          <Col>
            <StaticImage
              src="../../assets/images/commercial-image-2.jpg"
              alt="commercial building "
              width={416}
              height={302}
              className="rounded"
            ></StaticImage>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col md={{ span: 4, offset: 2 }}>
            <StaticImage
              src="../../assets/images/commercial-image.jpg"
              alt="commercial building "
              width={416}
              height={302}
              className="rounded"
            ></StaticImage>
          </Col>
          <Col
            style={{ alignSelf: "center" }}
            xs={{ order: "first" }}
            lg={{ order: "last" }}
            className=" align-left"
          >
            <h3 className="orange-text ">
              Deep Cleaning <br /> and <br />
              Disinfecting
            </h3>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col md={{ span: 4, offset: 2 }} style={{ alignSelf: "center" }}>
            <h3 className="orange-text">
              Building <br /> Maintenance <br /> Services
            </h3>
          </Col>
          <Col>
            <StaticImage
              src="../../assets/images/commercial-home.jpg"
              alt="commercial building "
              width={416}
              height={302}
              className="rounded"
            ></StaticImage>
          </Col>
        </Row>
      </Container>
      <ContactForm title="GET IN TOUCH!" image="worker7.svg"></ContactForm>
    </Layout>
  )
}
