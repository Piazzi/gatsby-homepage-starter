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
          <h1 className="p-title blue-text">SERVICE 3</h1>
          <p>
            Nunc sit amet risus nulla. Sed venenatis malesuada dui sit amet
            interdum. Duis id varius orci. In sit amet iaculis justo, et
            placerat velit. Morbi quam risus, consequat cursus sodales eget,
            commodo vel tortor. Nulla tellus dolor, iaculis quis mollis non,
            aliquam quis nunc. Donec rhoncus facilisis cursus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; In dictum, erat et vestibulum ornare, sapien dui porta lorem,
            sed consectetur nibh dui eu elit.
          </p>
        </Row>

        <Row className="margin-top">
          <Col
            md={{ span: 4, offset: 2 }}
            className=" commercial-text align-center"
          >
            <h3 className="orange-text  align-left">
            Aenean pellentesque odio libero
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
            Aenean pellentesque odio libero
            </h3>
          </Col>
        </Row>

        <Row className="margin-top">
          <Col md={{ span: 4, offset: 2 }} style={{ alignSelf: "center" }}>
            <h3 className="orange-text">
            Aenean pellentesque odio libero
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
